const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spellSchema = new Schema(
    {
        name: String,
        level: Number,
        description: String,
        range: String,
        school: String,
        materials: String,
        components: String,
        castingTime: String,
        duration: String,
    },
    {timestamps: true}
)

const Spell = mongoose.model('Spell', spellSchema)

module.exports = Spell