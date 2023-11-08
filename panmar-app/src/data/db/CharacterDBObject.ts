const mongoose = require('mongoose')
const Schema = mongoose.Schema

import LivingCharacter from "../structures/character"

const CharacterSchema = new Schema({
    googleID: {
        type: String,
        required: true
    },
    Character: {
        type: Schema.Types.Mixed,
        require: true
    }
    
})

const CharacterModel = mongoose.model('Character', CharacterSchema)

module.exports = CharacterModel