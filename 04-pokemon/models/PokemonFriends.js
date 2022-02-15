const bookshelf = require('./bookshelf');

const PokemonFriends = bookshelf.Model.extend({
    tableName: "PokemonFriends"
});

/*
const PokemonFriends = bookshelf.model('PokemonFriends', {
    tableName: "PokemonFriends"
});
*/

module.exports = PokemonFriends;