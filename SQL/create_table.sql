USE cinema;
CREATE TABLE Events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    time INT NOT NULL,
    date DATE NOT NULL,
    numberPerson INT NOT NULL
);
CREATE TABLE Users (
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
CREATE TABLE Films (
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
CREATE TABLE Cinemas (
    id INT AUTO_INCREMENT PRIMARY KEY,       
    name VARCHAR(255) NOT NULL,               
    numberPlace INT NOT NULL,                 
    currentTime INT NOT NULL,                 
    createdDate DATE NOT NULL,                
    numberPerson INT NOT NULL,                
    organization VARCHAR(255) NOT NULL        
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,          
    contenu TEXT NOT NULL,                       
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5), 
    film_id INT NOT NULL,                        
    user_id INT NOT NULL,                        
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (film_id) REFERENCES films(id) ON DELETE CASCADE, 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE  
);

