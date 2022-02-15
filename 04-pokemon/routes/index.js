const express = require('express');
const router = express.Router();

router.get('/', (reg, res) => {
    res.send('OK! 😃');
});

// Läs in sub-routes
router.use('/pokemoncards', require('./pokemoncards_route'));
router.use('/pokemonfriends', require('./pokemonfriends_route'));
router.use('/pokemonbattles', require('./pokemonbattles_route'));

module.exports = router;