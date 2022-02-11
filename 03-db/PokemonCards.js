const bookshelf = require('./bookshelf');

const PokemonCards = bookshelf.Model.extend({
    tableName: "PokemonCards"
});

module.exports = PokemonCards;