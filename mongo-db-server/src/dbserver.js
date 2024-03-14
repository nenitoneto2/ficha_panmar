const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
const URL = "mongodb://127.0.0.1:27017/pan-mar/"

app.use(express.json());
app.use(cors());


mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

const ItemSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  item:{
    type: Schema.Types.Mixed,
  }
})

const CharacterModel = mongoose.model('Character', CharacterSchema)

app.get('/api/characters', async (req, res) => {
  const characters = await CharacterModel.find();
  res.json(characters);
});

app.post('/api/characters', async (req, res) => {
  const newCharacter = new CharacterModel(req.body);
  await newCharacter.save();
  res.json(newCharacter);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.put('/api/characters/:id', async (req, res) => {
    const characterId = req.params.id;
    const updatedCharacter = await CharacterModel.findByIdAndUpdate(characterId, req.body, { new: true });
    res.json(updatedCharacter);
  });
  
  app.delete('/api/characters/:id', async (req, res) => {
    const characterId = req.params.id;
    const deletedCharacter = await CharacterModel.findByIdAndRemove(characterId);
    res.json(deletedCharacter);
  });

  const ItemModel = mongoose.model('Item', ItemSchema)

  app.get('/api/Items', async (req, res) => {
    const characters = await ItemModel.find();
    res.json(characters);
  });
  
  app.post('/api/Items', async (req, res) => {
    const newCharacter = new ItemModel(req.body);
    await newCharacter.save();
    res.json(newCharacter);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  app.put('/api/Items/:id', async (req, res) => {
      const characterId = req.params.id;
      const updatedCharacter = await ItemModel.findByIdAndUpdate(characterId, req.body, { new: true });
      res.json(updatedCharacter);
    });
    
    app.delete('/api/Items/:id', async (req, res) => {
      const characterId = req.params.id;
      const deletedCharacter = await ItemModel.findByIdAndRemove(characterId);
      res.json(deletedCharacter);
    });