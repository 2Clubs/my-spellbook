// Dependencies
const express = require('express')
const spellsRouter = express.Router()
const Spell = require('../models/spells')

// Index
spellsRouter.get('/', async (req, res) => {
    const allSpells = await Spell.find({})
    res.render('dashboard.ejs', {
        spells: allSpells,
        currentUser: req.session.currentUser
    })
})



module.exports = spellsRouter