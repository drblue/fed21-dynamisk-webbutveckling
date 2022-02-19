const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});

router.use('/titles', 
	require('./general_router')(
		require('../controllers/titles_controller')
	)
);
router.use('/authors', 
	require('./general_router')(
		require('../controllers/authors_controller')
	)
);
router.use('/users', 
	require('./general_router')(
		require('../controllers/users_controller')
	)
);

module.exports = router;