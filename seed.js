const mongoose = require('mongoose')
const Spell = require('./models/spells')
const spellArr = require('./spellsArr')
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL)

const seedSpellsDB = async() => {
    await Spell.deleteMany({})
    await Spell.insertMany(spellArr)
}

seedSpellsDB().then(() => {
    mongoose.connection.close()
})