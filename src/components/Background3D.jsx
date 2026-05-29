import { useRef, useEffect } from 'react'

const CELL = 24   // grid cell size in pixels
const SPEED = 0.18

// Contour threshold levels — more levels = denser map
const LEVELS = [-0.7, -0.5, -0.3, -0.1, 0.1, 0.3, 0.5, 0.7]

// Marching squares: for each 4-bit corner case, which pairs of edges to connect
// Edges: 0=top, 1=right, 2=bottom, 3=left  |  Corners bits: 1=TL,2=TR,4=BR,8=BL
const MS = [
  [],                 // 0
  [[3,0]],            // 1  TL
  [[0,1]],            // 2  TR
  [[3,1]],            // 3  TL+TR
  [[1,2]],            // 4  BR
  [[3,2],[0,1]],      // 5  TL+BR  (saddle)
  [[0,2]],            // 6  TR+BR
  [[3,2]],            // 7  TL+TR+BR
  [[2,3]],            // 8  BL
  [[0,2]],            // 9  TL+BL
  [[0,3],[1,2]],      // 10 TR+BL  (saddle)
  [[1,2]],            // 11 TL+TR+BL
  [[3,1]],            // 12 BR+BL
  [[0,1]],            // 13 TL+BR+BL
  [[3,0]],            // 14 TR+BR+BL
  [],                 // 15
]

// Interpolate where contour crosses a cell edge
const crossPt = (edge, x, y, c, thr) => {
  // c = [TL, TR, BR, BL]
  switch (edge) {
    case 0: { const t = (thr-c[0])/(c[1]-c[0]); return [x + t*CELL, y       ] }
    case 1: { const t = (thr-c[1])/(c[2]-c[1]); return [x + CELL,   y + t*CELL] }
    case 2: { const t = (thr-c[3])/(c[2]-c[3]); return [x + t*CELL, y + CELL] }
    case 3: { const t = (thr-c[0])/(c[3]-c[0]); return [x,          y + t*CELL] }
    default: return [x, y]
  }
}

// Layered sine-wave height field
const h = (nx, ny, t) => (
  Math.sin(nx * 4.8 + t * 0.38) * Math.cos(ny * 3.5 - t * 0.27) * 0.34 +
  Math.sin(nx * 2.1 + ny * 3.9 + t * 0.19) * 0.28 +
  Math.cos(nx * 6.7 - ny * 2.6 + t * 0.44) * 0.22 +
  Math.sin(nx * 3.3 + ny * 5.2 - t * 0.31) * 0.16
)

const Background3D = () => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const t0Ref = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = (ts) => {
      if (!t0Ref.current) t0Ref.current = ts
      const t = (ts - t0Ref.current) / 1000 * SPEED

      const W = canvas.width
      const H = canvas.height
      const cols = Math.ceil(W / CELL) + 1
      const rows = Math.ceil(H / CELL) + 1

      ctx.clearRect(0, 0, W, H)

      // Build height grid (shared across all contour levels)
      const grid = []
      for (let r = 0; r <= rows; r++) {
        grid[r] = new Float32Array(cols + 1)
        for (let c = 0; c <= cols; c++) {
          grid[r][c] = h(c / cols, r / rows, t)
        }
      }

      // Draw each contour level
      for (let li = 0; li < LEVELS.length; li++) {
        const thr = LEVELS[li]
        const isIndex = li % 4 === 0   // every 4th line is an "index contour" — thicker

        // Map threshold (-0.7 → 0.7) to 0–1 for color: deep blue at valleys, white-cyan at peaks
        const tn = (thr + 0.7) / 1.4
        const r = Math.round(20  + tn * 160)   // 20  → 180
        const g = Math.round(80  + tn * 150)   // 80  → 230
        const b = Math.round(200 + tn * 55)    // 200 → 255

        const alpha = isIndex ? 0.42 : 0.20
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.lineWidth = isIndex ? 2.0 : 0.7

        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`
        ctx.shadowBlur = isIndex ? 10 : 5

        ctx.beginPath()
        for (let row = 0; row < rows; row++) {
          for (let c = 0; c < cols; c++) {
            const x = c * CELL
            const y = row * CELL
            const corners = [grid[row][c], grid[row][c+1], grid[row+1][c+1], grid[row+1][c]]

            const idx =
              (corners[0] > thr ? 1 : 0) |
              (corners[1] > thr ? 2 : 0) |
              (corners[2] > thr ? 4 : 0) |
              (corners[3] > thr ? 8 : 0)

            for (const [e1, e2] of MS[idx]) {
              const [x1, y1] = crossPt(e1, x, y, corners, thr)
              const [x2, y2] = crossPt(e2, x, y, corners, thr)
              ctx.moveTo(x1, y1)
              ctx.lineTo(x2, y2)
            }
          }
        }
        ctx.stroke()
      }

      ctx.shadowBlur = 0

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="canvas-container"
      style={{ opacity: 0.85 }}
    />
  )
}

export default Background3D
