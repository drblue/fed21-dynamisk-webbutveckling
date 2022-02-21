/**
 * Book model
 */

module.exports = (bookshelf) => {
	return bookshelf.model('Book', {
		tableName: 'books',
		author() {
			return this.belongsTo('Author');   // books.author_id = 3   ->   authors.id = 3 (single author)
		},
		users() {
			return this.belongsToMany('User');
		}
	});
}
