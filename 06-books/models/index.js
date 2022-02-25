// Setting up the database connection
const knex = require('knex')({
	debug: true,
	client: 'mysql',
	connection: {
		host: process.env.DB_HOST || 'localhost',
		port: process.env.DB_PORT || 3306,
		user: process.env.DB_USER || 'library',
		password: process.env.DB_PASSWORD || '',
		database: process.env.DB_NAME || 'library',
	}
});

const bookshelf = require('bookshelf')(knex);

const models = {};
models.Author = require('./Author')(bookshelf);
models.Book = require('./Book')(bookshelf);
models.User = require('./User')(bookshelf);

module.exports = {
	bookshelf,
	...models,
};
