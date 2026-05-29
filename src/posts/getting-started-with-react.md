---
title: Getting Started with React
date: 2024-03-15
description: A practical introduction to React.js and why it has become the go-to library for building modern UIs.
tags: [React, JavaScript, Web Development]
---

React has fundamentally changed how I think about building user interfaces. Before React, I was writing jQuery spaghetti and praying nothing broke when I added a new feature. Now, with a component-based model, everything is predictable and reusable.

## Why React?

The core idea is simple: **your UI is a function of your state**. When state changes, React figures out the minimal set of DOM updates needed. You stop thinking about *mutations* and start thinking about *descriptions*.

```jsx
function Counter() {
  const [count, setCount] = React.useState(0)
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
}
```

That's it. No `document.getElementById`, no event listener cleanup, no manual DOM updates.

## The Mental Model Shift

The hardest part of learning React isn't the syntax — it's unlearning imperative thinking. Instead of "find the button and change its text", you think "what does the button look like when `isLoading` is true vs false?"

This shift pays dividends when your app grows. A component that renders correctly for all its possible states is a component you can trust.

## Where to Go Next

Once you're comfortable with `useState` and `useEffect`, I'd recommend exploring:

- **React Router** for client-side navigation
- **Context API** for shared state without prop drilling
- **Custom hooks** for extracting and reusing stateful logic

React has a steep-ish learning curve in the beginning, but the moment it clicks, you won't want to go back.
