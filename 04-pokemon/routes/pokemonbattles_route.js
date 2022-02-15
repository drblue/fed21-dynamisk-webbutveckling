const express = require('express');
const router = express.Router();

// Implementera GET / READ -  Alla Pokemonbattles
// curl -X GET http://localhost:3000/pokemonbattles/
router.get('/', (req, res) => {  //  -> /pokemonbattles/
    res.send('GET not implemented');
});

// Implementera GET / READ -  Ett PokemonBattle
// curl -X GET http://localhost:3000/pokemonbattles/1234
router.get('/:id', (req, res) => {  // -> /pokemonbattles/1234  (req.params.id = 1234)
    res.send('GET (' + req.params.id + ') not yet implemented!');
});

// Implementera POST / CREATE - Skapa en PokemonBattle
// curl -X POST http://localhost:3000/pokemonbattles/1234
router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});

// Implementera PUT / UPDATE - Uppdatera ett PokemonBattle
// curl -X PUT http://localhost:3000/pokemonbattles/1234
router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

// Implementera DELETE / DELETE (DESTROY) - Radera ett PokemonBattle
// curl -X DELETE http://localhost:3000/pokemonbattles/1234
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});

module.exports = router;