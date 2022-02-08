CREATE DATABASE MyPokemons;
USE MyPokemons; 

SHOW DATABASES;
SHOW TABLES;

CREATE TABLE PokemonFriends (
	name VARCHAR(250),
    email VARCHAR(250)
);
-- DESCRIBE PokemonFriends;

-- DROP TABLE PokemonFriends;
-- CREATE TABLE PokemonFriends (
--     id INTEGER NOT NULL AUTO_INCREMENT,
-- 	   name VARCHAR(250),
--     email VARCHAR(250),
--     PRIMARY KEY(id)
-- );

SELECT * FROM PokemonFriends;

-- DROP TABLE PokemonCards;
CREATE TABLE PokemonCards (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(250),
	hp INTEGER NOT NULL,
	PRIMARY KEY(id)
);


-- DROP TABLE PokemonBattles;
CREATE TABLE PokemonBattles (
	id INTEGER NOT NULL AUTO_INCREMENT,
	winningPokemon INTEGER NOT NULL,	
	loosingPokemon INTEGER NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(winningPokemon) REFERENCES PokemonCards(id),
	FOREIGN KEY(loosingPokemon) REFERENCES PokemonCards(id)
);

INSERT PokemonCards (name, hp) VALUES ('Skrelp', 50);
INSERT PokemonCards (name, hp) VALUES ('Gothita ', 60);
INSERT PokemonCards (name, hp) VALUES ('Chansey', 110);
INSERT INTO PokemonCards SET name = "Kangaskhan", hp = "130";

INSERT PokemonBattles (winningPokemon, loosingPokemon) VALUES (1, 2), (1, 3), (3, 2);
SELECT * FROM PokemonCards;
SELECT * FROM PokemonBattles;



SELECT
	name, 
	email
FROM 
	PokemonFriends;


SELECT
	*
FROM 
	PokemonCards;

SELECT
	name,
	hp
FROM 
	PokemonCards
WHERE
	hp > 100;

INSERT INTO PokemonBattles (winningPokemon, loosingPokemon) VALUES (1, 2);


--
-- Fråga med två sub-selects = hämtar data från relaterade tabeller
--
SELECT 
	PokemonCards.id, 
    name, 
    hp, 
	(SELECT  	-- Räkna antalet PokemonBattle rader där winningPokemon = denna
		COUNT(*) 
	 FROM 
		PokemonBattles 
	 WHERE 
		winningPokemon = PokemonCards.id
	 ) AS Wins, 
     (SELECT 	-- Räkna antalet PokemonBattle rader där loosingPokemon = denna
		COUNT(*) 
	  FROM 
		PokemonBattles 
	  WHERE 
        loosingPokemon = PokemonBattles.id
	  ) AS Losses  
FROM 
	PokemonCards;


--
-- Exempel på "JOIN"
--
SELECT
	winningPokemon, 
    loosingPokemon,
    name AS winner-- Kan också skrivas som PokemonCard.name 
FROM
	PokemonBattles
JOIN
	PokemonCards
ON
	PokemonBattles.winningPokemon = PokemonCards.id;
