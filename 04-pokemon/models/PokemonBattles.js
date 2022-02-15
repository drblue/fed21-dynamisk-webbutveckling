const bookshelf = require('./bookshelf');

const PokemonBattles = bookshelf.Model.extend({
    tableName: "PokemonBattles"
});

/*
const PokemonBattles = bookshelf.model('PokemonBattles', {
    tableName: "PokemonBattles"
});
*/

module.exports = PokemonBattles;