const CharacterModel = require("../../../data/db/CharacterDBObject")
CharacterModel.methods(['get', 'post', 'put', 'delete'])
CharacterModel.updateOptions({new: true, runValidators: true})

module.exports = CharacterModel