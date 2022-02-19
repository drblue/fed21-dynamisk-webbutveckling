const bookshelf = require('./bookshelf');

const Titles = bookshelf.model(
    'Titles',
    {
        tableName: "Titles"
    }
);

module.exports = Titles;