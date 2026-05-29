const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':')
    if (colon < 1) continue
    const key = line.slice(0, colon).trim()
    let val = line.slice(colon + 1).trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean)
    }
    data[key] = val
  }

  return { data, content: match[2] }
}

export function getAllPosts() {
  return Object.entries(modules)
    .map(([filepath, raw]) => {
      const slug = filepath.replace('../posts/', '').replace('.md', '')
      const { data, content } = parseFrontmatter(raw)
      return { slug, ...data, body: content }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug) || null
}
