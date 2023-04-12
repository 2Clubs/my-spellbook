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

// Destroy

// Update

// Create

// Edit
spellsRouter.get('/:id/edit', async (req, res) => {
    const foundSpell = await Spell.findById(req.params.id)
    res.render('spells/edit.ejs', {
        spell: foundSpell,
        currentUser: req.session.currentUser
    })
})

// Show
spellsRouter.get('/:id', async (req, res) => {
    const foundSpell = await Spell.findById(req.params.id).exec()
    res.render('spells/show.ejs', {
        spell: foundSpell,
        currentUser: req.session.currentUser
    })
})
module.exports = spellsRouter