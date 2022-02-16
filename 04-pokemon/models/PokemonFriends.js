const bookshelf = require('./bookshelf');
const PokemonCards = require('./PokemonCards');

const PokemonFriends = bookshelf.Model.extend({
    tableName: "PokemonFriends",
    cards() {
        return this.belongsToMany(PokemonCards, "PokemonFriendCards", "friend", "card");
    }
});

/*
const PokemonFriends = bookshelf.model('PokemonFriends', {
    tableName: "PokemonFriends"
});
*/

module.exports = PokemonFriends;