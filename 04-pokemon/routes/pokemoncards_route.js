const express = require('express');
const router = express.Router();
const pokemoncards_controller = require('../controllers/pokemoncards_controller');

// Implementera GET / READ -  Alla pokemonkort
// curl -X GET http://localhost:3000/pokemoncards/
router.get('/', pokemoncards_controller.read);

// Implementera GET / READ -  Ett pokemonkort
// curl -X GET http://localhost:3000/pokemoncards/1234
router.get('/:id', pokemoncards_controller.read);

// Implementera POST / CREATE - Skapa ett pokemonkort
// curl -X POST http://localhost:3000/pokemoncards/1234
router.post('/', (req, res) => {
    res.send('POST not yet implemented');
});

// Implementera PUT / UPDATE - Uppdatera ett pokemonkort
// curl -X PUT http://localhost:3000/pokemoncards/1234
router.put('/:id', (req, res) => {
    res.send('PUT (' + req.params.id + ') not yet implemented');
});

// Implementera DELETE / DELETE (DESTROY) - Radera ett pokemonkort
// curl -X DELETE http://localhost:3000/pokemoncards/1234
router.delete('/:id', (req, res) => {
    res.send('DELETE (' + req.params.id + ') not yet implemented');
});

module.exports = router;