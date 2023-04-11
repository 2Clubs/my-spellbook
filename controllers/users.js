const bcrypt = require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

// New (registration page)
userRouter.get('/new', (req, res) => {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})