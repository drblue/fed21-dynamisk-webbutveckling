const bookshelf = require('./bookshelf');

const Users = bookshelf.model(
    'Users',
    {
        tableName: "Users",
        reservations() {
            return this.belongsToMany("Titles", "Reservations", "user", "title").query({where: {status: 'waiting'}})
        }
    }
);

module.exports = Users;