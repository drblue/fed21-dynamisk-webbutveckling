const express = require('express');
const router = express.Router();
const pokemonfriends_controller = require('../controllers/pokemonfriends_controller');

// Implementera GET / READ -  Alla Pokemonkompis
// curl -X GET http://localhost:3000/pokemonfriends/
router.get('/', pokemonfriends_controller.read);

// Implementera GET / READ -  En Pokemonkompis
// curl -X GET http://localhost:3000/pokemonfriends/1234
router.get('/:id', pokemonfriends_controller.read);

// Implementera POST / CREATE - Skapa en pokemonkompis
// curl -X POST http://localhost:3000/pokemonfriends/1234
router.post('/', pokemonfriends_controller.create);

// Implementera PUT / UPDATE - Uppdatera en pokemonkompis
// curl -X PUT http://localhost:3000/pokemonfriends/1234
router.put('/:id', pokemonfriends_controller.update);

// Implementera DELETE / DELETE (DESTROY) - Radera en pokemonkompis
// curl -X DELETE http://localhost:3000/pokemonfriends/1234
router.delete('/:id', pokemonfriends_controller.destroy);

// Implementera addCars
// curl -X POST http://localhost:3000/pokemonfriends/71/addCard -H 'Content-Type: application/json' -d '{ "card" : 11  }'
router.post('/:id/addCard', pokemonfriends_controller.addCard);

module.exports = router;
