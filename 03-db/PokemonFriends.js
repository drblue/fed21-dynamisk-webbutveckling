const bookshelf = require('./bookshelf');

const PokemonFriends = bookshelf.Model.extend({
    tableName: "PokemonFriends"
});

module.exports = PokemonFriends;