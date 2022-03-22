const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});

router.use('/genres', require('./genres'));
router.use('/movies', require('./movies'));
router.use('/people', require('./people'));

module.exports = router;
