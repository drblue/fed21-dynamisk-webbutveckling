const bookshelf = require('./bookshelf');

const Reservations = bookshelf.model(
    'Reservations',
    {
        tableName: "Reservations"
    }
);

module.exports = Reservations;