const express = require('express')
const bcrypt = require('bcrypt')
const sessionsRouter = express.Router()
const User = require('../models/user')

// User logs in on index page -- handled by router on server.js

// Delete (logout route
sessionsRouter.delete("/", (req, res) => {
    req.session.destroy((error) => {
        res.redirect('/')
    })
})

// Create (login route)
sessionsRouter.post("/", async (req, res) => {
  // Check for an existing user
  try {
    const foundUser = await User.findOne({ email: req.body.email }).orFail();
    const passwordMatches = bcrypt.compareSync(
      req.body.password,
      foundUser.password
    );
    if (passwordMatches) {
      // add the user to our session
      req.session.currentUser = foundUser;
      res.redirect("/");
    } else {
      // If passwords don't match
      res.send("Oops! Invalid credentials.");
    }
  } catch (err) {
    res.send("Oops! No user with that email address has been registered.");
  }
});

// Export Sessions Router
module.exports = sessionsRouter;