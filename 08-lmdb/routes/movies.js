/**
 * Movie routes
 */

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie_controller');

/* Get all movies */
router.get('/', movieController.index);

/* Search for movies */
router.get('/search', movieController.search);

/* Get a movie */
router.get('/:movie', movieController.show);

/* Create a new movie */
router.post('/', movieController.store);

/* Update a movie */
router.put('/:movie', movieController.update);

/* Delete a movie */
router.delete('/:movie', movieController.destroy);

/* Add actors to a movie */
router.post('/:movie/actors', movieController.addActors);

/* Delete an actor from a movie */
router.delete('/:movie/actors/:personId', movieController.removeActor);

module.exports = router;
