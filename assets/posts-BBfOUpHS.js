import{c as l}from"./index-D2vklPEi.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),u=`---
title: Building REST APIs with Node.js and Express
date: 2024-05-02
description: A walkthrough of the patterns I use when building production-ready REST APIs with the MERN stack.
tags: [Node.js, Express, MongoDB, Backend]
---

After building several full-stack projects, I've settled on a set of patterns that make my Express APIs maintainable and easy to reason about. Here's what works for me.

## Project Structure

A flat structure is fine for small projects, but anything with 3+ resources benefits from grouping by feature:

\`\`\`
src/
  routes/
    auth.routes.js
    user.routes.js
  controllers/
    auth.controller.js
    user.controller.js
  models/
    User.js
  middleware/
    auth.middleware.js
  app.js
  server.js
\`\`\`

Keeping \`app.js\` (Express setup) separate from \`server.js\` (the actual \`listen\` call) makes testing much easier.

## Route → Controller → Model

The key discipline is keeping routes thin. A route should only parse the request and call a controller. All business logic lives in the controller, and all database logic lives in the model.

\`\`\`js
// routes/user.routes.js
router.get('/profile', authMiddleware, userController.getProfile)

// controllers/user.controller.js
export async function getProfile(req, res) {
  const user = await User.findById(req.user.id).select('-password')
  res.json(user)
}
\`\`\`

## Error Handling

A global error handler middleware saves you from repeating \`try/catch\` everywhere:

\`\`\`js
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ message: err.message || 'Internal server error' })
})
\`\`\`

Then in controllers, just throw with a status attached:

\`\`\`js
const err = new Error('User not found')
err.status = 404
throw err
\`\`\`

## JWT Authentication

For auth, I use short-lived access tokens (15 min) stored in memory and long-lived refresh tokens (7 days) in an \`httpOnly\` cookie. This avoids XSS stealing tokens while still giving a good UX.

Building APIs is mostly about consistency. Pick your patterns early, apply them everywhere, and future-you will be grateful.
`,c=`---
title: Getting Started with React
date: 2024-03-15
description: A practical introduction to React.js and why it has become the go-to library for building modern UIs.
tags: [React, JavaScript, Web Development]
---

React has fundamentally changed how I think about building user interfaces. Before React, I was writing jQuery spaghetti and praying nothing broke when I added a new feature. Now, with a component-based model, everything is predictable and reusable.

## Why React?

The core idea is simple: **your UI is a function of your state**. When state changes, React figures out the minimal set of DOM updates needed. You stop thinking about *mutations* and start thinking about *descriptions*.

\`\`\`jsx
function Counter() {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
}
\`\`\`

That's it. No \`document.getElementById\`, no event listener cleanup, no manual DOM updates.

## The Mental Model Shift

The hardest part of learning React isn't the syntax — it's unlearning imperative thinking. Instead of "find the button and change its text", you think "what does the button look like when \`isLoading\` is true vs false?"

This shift pays dividends when your app grows. A component that renders correctly for all its possible states is a component you can trust.

## Where to Go Next

Once you're comfortable with \`useState\` and \`useEffect\`, I'd recommend exploring:

- **React Router** for client-side navigation
- **Context API** for shared state without prop drilling
- **Custom hooks** for extracting and reusing stateful logic

React has a steep-ish learning curve in the beginning, but the moment it clicks, you won't want to go back.
`,d=`---
title: NetScan-Pro — Building a Bash Network Tool
date: 2024-07-20
description: How I built a Bash-based network scanning tool that hit 80+ GitHub stars and what I learned about shell scripting along the way.
tags: [Bash, Linux, Networking, Open Source]
---

NetScan-Pro started as a personal utility — I was tired of remembering \`nmap\` flags and switching between tools for different network tasks. I wanted one script that did it all with a clean output. It ended up hitting 80+ stars on GitHub, which surprised me.

## The Core Features

The tool wraps four main operations behind a simple menu:

- **Live host discovery** — pings a subnet range and lists responsive hosts
- **Port scanning** — calls \`nmap\` with sensible defaults
- **Traceroute** — visualises the hop path to a target
- **Ping test** — quick latency check with packet loss stats

The ASCII banner is just \`figlet\` piped through \`lolcat\`, but people seem to like it.

## What Bash Is Good At

Bash shines for gluing existing Unix tools together. Almost everything in NetScan-Pro is orchestration — calling \`nmap\`, \`ping\`, \`traceroute\`, \`arp-scan\` and formatting their output. The script itself adds the menu logic, input validation, and coloured formatting.

\`\`\`bash
function scan_ports() {
  local target=$1
  echo -e "\${CYAN}Scanning ports on \${target}...\${RESET}"
  nmap -sV --open -T4 "$target" 2>/dev/null
}
\`\`\`

## Lessons Learned

**Always quote your variables.** \`$target\` becoming two arguments because of a space in a hostname was a fun bug to track down.

**Validate input early.** A bad IP passed to \`nmap\` produces a confusing error. Checking the format with a regex before calling any tool gives much friendlier output.

**\`set -e\` is your friend.** Exiting on the first error prevents half-completed operations that leave the system in a weird state.

The project is open source — contributions welcome if you want to add features like subnet CIDR parsing or JSON output.
`,h=Object.assign({"../posts/building-rest-apis-with-node-and-express.md":u,"../posts/getting-started-with-react.md":c,"../posts/netscan-pro-building-a-bash-network-tool.md":d});function g(t){const e=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!e)return{data:{},content:t};const a={};for(const n of e[1].split(`
`)){const s=n.indexOf(":");if(s<1)continue;const r=n.slice(0,s).trim();let o=n.slice(s+1).trim();o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1).split(",").map(i=>i.trim()).filter(Boolean)),a[r]=o}return{data:a,content:e[2]}}function p(){return Object.entries(h).map(([t,e])=>{const a=t.replace("../posts/","").replace(".md",""),{data:n,content:s}=g(e);return{slug:a,...n,body:s}}).sort((t,e)=>new Date(e.date)-new Date(t.date))}function w(t){return p().find(e=>e.slug===t)||null}export{f as T,w as a,p as g};
