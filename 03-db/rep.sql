
CREATE DATABASE Repetition;
USE Repetition;

CREATE TABLE Users (
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Vehicles (
	id INTEGER NOT NULL AUTO_INCREMENT, 
    userId INTEGER NOT NULL,
    make VARCHAR(200),
    type ENUM('car', 'bus', 'bike'),
    PRIMARY KEY(id),
    FOREIGN KEY(userId) REFERENCES Users(id)
);

INSERT INTO Users (name) VALUES ('Martin'), ('Paulina');
INSERT INTO Users SET name = 'Sara';
SELECT * FROM Users;

INSERT INTO Vehicles (userId, make, type) VALUES (1, 'Monark', 'bike');
INSERT INTO Vehicles (userId, make, type) VALUES (2, 'Volvo', 'bus'), (3, 'Tesla', 'car');
INSERT INTO Vehicles (userId, make, type) VALUES (3, 'Canondale', 'bike');
SELECT * FROM Vehicles;

SELECT id, make, type FROM Vehicles WHERE type = 'car';
SELECT id, make, type FROM Vehicles WHERE type = 'car' OR type = 'bus';
SELECT id, make, type FROM Vehicles WHERE type IN ('car', 'bus');

SELECT id, make, type FROM Vehicles ORDER BY id DESC;
SELECT id, make, type FROM Vehicles ORDER BY id, userId ASC;

SELECT name, make, type FROM Vehicles JOIN Users ON Users.id = Vehicles.userId;

UPDATE Vehicles SET make = 'Fiat' WHERE id = 3;
DELETE FROM Vehicles WHERE id = 4;