const PokemonCards = require('./PokemonCards');
//const PokemonFriends = require('./PokemonFriends');

/*
PokemonCards.fetchAll().then((collection) => {
    //console.log(collection);
    console.log(collection.toJSON());
});
*/
/*
PokemonCards.count().then((count) => {
    console.log('Vi har nu ' + count + ' pokemons!');
});
*/
/*
const parametrar = { 
    "hp": 100,
    "xp": 10
};
PokemonCards.where(parametrar).fetchAll().then((collection) => {
    console.log(collection.toJSON());
});
*/

const attribut = {
    name: "Skrelp",
    hp: 50
};
let Skrelp = new PokemonCards(attribut);
Skrelp.save().then((res) => {
    console.log(res);
});

// destroy() -- för att radera 