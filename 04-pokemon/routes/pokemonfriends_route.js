const express = require('express');
const router = express.Router();

// Implementera GET / READ -  Alla Pokemonkompis
// curl -X GET http://localhost:3000/pokemonfriends/
router.get('/', (req, res) => {  //  -> /pokemonfriends/
    res.send('GET not implemented');
});

// Implementera GET / READ -  En Pokemonkompis
// curl -X GET http://localhost:3000/pokemonfriends/1234
router.get('/:id', (req, res) => {  // -> /pokemonfriends/1234  (req.params.id = 1234)
    res.send('GET (' + req.params.id + ') not yet implemented!');
});

// Implementera POST / CREATE - Skapa en pokemonkompis
// curl -X POST http://localhost:3000/pokemonfriends/1234
router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});

// Implementera PUT / UPDATE - Uppdatera en pokemonkompis
// curl -X PUT http://localhost:3000/pokemonfriends/1234
router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

// Implementera DELETE / DELETE (DESTROY) - Radera en pokemonkompis
// curl -X DELETE http://localhost:3000/pokemonfriends/1234
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});

module.exports = router;