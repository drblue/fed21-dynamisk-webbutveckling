const bookshelf = require('./bookshelf');

const Authors = bookshelf.model(
    'Authors',
    {
        tableName: "Authors",
        titles() {
            return this.hasMany("Titles", 'authorId')
        },
    }
);

module.exports = Authors;