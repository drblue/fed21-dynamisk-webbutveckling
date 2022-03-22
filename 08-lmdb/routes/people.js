/**
 * People routes
 */

const express = require('express');
const router = express.Router();
const personController = require('../controllers/person_controller');

/* Get all persons */
router.get('/', personController.index);

/* Get a person */
router.get('/:personId', personController.show);

/* Create a new person */
router.post('/', personController.store);

/* Update a person */
router.put('/:personId', personController.update);

/* Delete a person */
router.delete('/:personId', personController.destroy);

module.exports = router;
