const bookshelf = require('./bookshelf');
const PokemonBattles = require('./PokemonBattles');

const PokemonCards = bookshelf.Model.extend({
    tableName: "PokemonCards",
    wonBattles() {
        return this.hasMany(PokemonBattles, 'winningPokemon');
    },
    lostBattles() {
        return this.hasMany(PokemonBattles, 'loosingPokemon');
    }
});

/*
const PokemonCards = bookshelf.model('PokemonCards', {
    tableName: "PokemonCards",
    wonBattles() {
        return this.hasMany('PokemonBattles', 'winningPokemon');
    }
});
*/

module.exports = PokemonCards;