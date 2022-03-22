/**
 * Genre routes
 */

const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre_controller');

/* Get all genres */
router.get('/', genreController.index);

/* Get a genre */
router.get('/:genreId', genreController.show);

/* Create a new genre */
router.post('/', genreController.store);

/* Update a genre */
router.put('/:genreId', genreController.update);

/* Delete a genre */
router.delete('/:genreId', genreController.destroy);

module.exports = router;
