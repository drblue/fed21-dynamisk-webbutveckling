const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author_controller');

/* Get all resources */
router.get('/', authorController.index);

/* Get a specific resource */
router.get('/:authorId', authorController.show);

/* Store a new resource */
router.post('/', authorController.store);

/* Update a specific resource */
router.put('/:authorId', authorController.update);

/* Destroy a specific resource */
router.delete('/:authorId', authorController.destroy);

module.exports = router;
