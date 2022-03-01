/**
 * User model
 */
const bcrypt = require('bcrypt');

module.exports = (bookshelf) => {
	return bookshelf.model('User', {
		tableName: 'users',
		books() {
			return this.belongsToMany('Book');
		}
	}, {
		hashSaltRounds: 10,

		async fetchById(id, fetchOptions = {}) {
			return await new this({ id }).fetch(fetchOptions);
		},

		async login(username, password) {
			// find user based on the username (bail if no such user exists)
			const user = await new this({ username }).fetch({ require: false });
			if (!user) {
				return false;
			}
			const hash = user.get('password');

			// hash the incoming cleartext password using the salt from the db
			// and compare if the generated hash matches the db-hash
			const result = await bcrypt.compare(password, hash);
			if (!result) {
				return false;
			}

			// all is well, return user
			return user;
		}
	});
};
