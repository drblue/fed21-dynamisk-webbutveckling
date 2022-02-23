const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/* GET / */
router.get('/', (req, res, next) => {
	res.send({ success: true, data: { msg: 'oh, hi' }});
});

router.use('/authors', require('./authors'));
router.use('/books', require('./books'));
router.use('/profile', auth.basic, require('./profile'));
router.use('/users', require('./users'));

module.exports = router;
