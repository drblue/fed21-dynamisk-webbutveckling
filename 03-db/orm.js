const PokemonCards = require('./PokemonCards');
const PokemonFriends = require('./PokemonFriends');

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
/*
const attribut = {
    name: "Skrelp",
    hp: 50
};
let Skrelp = new PokemonCards(attribut);
Skrelp.save().then((res) => {
    console.log(res);
});
PokemonCards.fetchAll().then((collection) => {  
    collection.forEach((model) => {
        console.log(`Name: ${model.get('name')} HP: ${model.get('hp')}`);
    });
});
*/
/*
PokemonFriends.fetchAll().then((result) => {
    console.log(result.toJSON());
});
*/
/*
for(var i=1;i<11;i++) {
    const attribute = {
        name: "namn"+i,
        email: "namn"+i+"@email.nu"
    };
    let Friend = new PokemonFriends(attribute);
    Friend.save().then((res) => {
        console.log(`User ${res.get('name')} was successfully saved with id=${res.id}`);
    });
}
*/


// Hämta alla PokemonFriends som har ett namn som börjar på "namn"
// SELECT * FROM PokmonFriends WHERE name LIKE 'name%' 
PokemonFriends.where("name", "LIKE", "namn%").fetchAll().then((collection) => {
    console.log(collection.toJSON());
    // Loopa igenom alla resultaten
    collection.forEach((model) => {
        // Radera dem en efter en
        model.destroy().then();
    });
    
});

// destroy() -- för att radera 