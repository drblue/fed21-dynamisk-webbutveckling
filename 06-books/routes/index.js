const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authController = require('../controllers/auth_controller');
const userValidationRules = require('../validation/user');

/* GET / */
router.get('/', (req, res, next) => {
	res.send({ success: true, data: { msg: 'oh, hi' }});
});

router.use('/authors', require('./authors'));
router.use('/books', require('./books'));
router.use('/profile', auth.basic, require('./profile'));

// register a new user
router.post('/register', userValidationRules.createRules, authController.register);

module.exports = router;
