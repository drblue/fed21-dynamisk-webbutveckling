const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/example_controller');
const exampleValidationRules = require('../validation/example');

/* Get all resources */
router.get('/', exampleController.index);

/* Get a specific resource */
router.get('/:exampleId', exampleController.show);

/* Store a new resource */
router.post('/', exampleValidationRules.createRules, exampleController.store);

/* Update a specific resource */
router.put('/:exampleId', exampleValidationRules.updateRules, exampleController.update);

/* Destroy a specific resource */
router.delete('/:exampleId', exampleController.destroy);

module.exports = router;
