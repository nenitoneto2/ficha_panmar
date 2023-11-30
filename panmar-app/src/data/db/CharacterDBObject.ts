import {mongoose} from '../db/dbLoader'
const restful = require('node-restful')
const Schema = mongoose.Schema


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

module.exports = restful.model("characterDB", CharacterModel)