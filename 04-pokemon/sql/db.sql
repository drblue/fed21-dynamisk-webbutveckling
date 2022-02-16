
CREATE TABLE PokemonFriends (
     id INTEGER NOT NULL AUTO_INCREMENT,
	 name VARCHAR(250),
     email VARCHAR(250),
     PRIMARY KEY(id)
);

CREATE TABLE PokemonCards (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(250),
	hp INTEGER NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE PokemonBattles (
	id INTEGER NOT NULL AUTO_INCREMENT,
	winningPokemon INTEGER NOT NULL,	
	loosingPokemon INTEGER NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(winningPokemon) REFERENCES PokemonCards(id),
	FOREIGN KEY(loosingPokemon) REFERENCES PokemonCards(id)
);

CREATE TABLE PokemonFriendCards (
    id INTEGER NOT NULL AUTO_INCREMENT,
    friend INTEGER NOT NULL,
    card INTEGER NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(friend) REFERENCES PokemonFriends(id),
    FOREIGN KEY(card) REFERENCES PokemonCards(id)
);