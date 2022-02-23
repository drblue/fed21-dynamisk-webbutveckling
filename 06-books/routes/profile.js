const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile_controller');
// const profileValidationRules = require('../validation/profile');

/**
 * Get authenticated user's profile
 */
router.get('/', profileController.getProfile);

/**
 * Update authenticated user's profile
 *
 * @todo Add validation rules
 */
router.put('/', profileController.updateProfile);

/**
 * Get authenticated user's books
 */
router.get('/books', profileController.getBooks);

module.exports = router;
