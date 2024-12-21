USE cinema;
CREATE TABLE Event (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    time INT NOT NULL,
    date DATE NOT NULL,
    numberPerson INT NOT NULL
);
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    activated BOOLEAN DEFAULT false,
    fullName VARCHAR(255) NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NULL,
    birthday DATE NULL,
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    cguActivated BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT email_unique UNIQUE (email)
);
CREATE TABLE films (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre ENUM('Action', 'Aventure', 'Comédie', 'Drame', 'Romance', 'Horreur', 'Science-fiction', 'Fantasy', 'Thriller', 'Documentaire', 'Animation', 'Historique'),
    time INT NULL,
    grade INT NULL,
    releaseDate DATE NULL,
    director VARCHAR(255) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
