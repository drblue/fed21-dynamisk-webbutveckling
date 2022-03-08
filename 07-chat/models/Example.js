/**
 * Example model
 */

module.exports = (bookshelf) => {
	return bookshelf.model('Example', {
		tableName: 'examples',
	});
};
