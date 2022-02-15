const bookshelf = require('./bookshelf');

const PokemonFriends = bookshelf.Model.extend({
    tableName: "PokemonBattles"
});

module.exports = PokemonFriends;