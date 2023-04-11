// Dependencies
const express = require('express')
const spellsRouter = express.Router()
const Spell = require('../models/spells')

// Index
spellsRouter.get('/', async (req, res) => {
    const allSpells = await Spell.find({})
    res.render('index.ejs', {
        spells: allSpells,
    })
})



module.exports = spellsRouter