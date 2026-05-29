---
title: Building REST APIs with Node.js and Express
date: 2024-05-02
description: A walkthrough of the patterns I use when building production-ready REST APIs with the MERN stack.
tags: [Node.js, Express, MongoDB, Backend]
---

After building several full-stack projects, I've settled on a set of patterns that make my Express APIs maintainable and easy to reason about. Here's what works for me.

## Project Structure

A flat structure is fine for small projects, but anything with 3+ resources benefits from grouping by feature:

```
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
```

Keeping `app.js` (Express setup) separate from `server.js` (the actual `listen` call) makes testing much easier.

## Route → Controller → Model

The key discipline is keeping routes thin. A route should only parse the request and call a controller. All business logic lives in the controller, and all database logic lives in the model.

```js
// routes/user.routes.js
router.get('/profile', authMiddleware, userController.getProfile)

// controllers/user.controller.js
export async function getProfile(req, res) {
  const user = await User.findById(req.user.id).select('-password')
  res.json(user)
}
```

## Error Handling

A global error handler middleware saves you from repeating `try/catch` everywhere:

```js
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ message: err.message || 'Internal server error' })
})
```

Then in controllers, just throw with a status attached:

```js
const err = new Error('User not found')
err.status = 404
throw err
```

## JWT Authentication

For auth, I use short-lived access tokens (15 min) stored in memory and long-lived refresh tokens (7 days) in an `httpOnly` cookie. This avoids XSS stealing tokens while still giving a good UX.

Building APIs is mostly about consistency. Pick your patterns early, apply them everywhere, and future-you will be grateful.
