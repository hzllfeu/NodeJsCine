USE cinema;
CREATE TABLE Event (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    time INT NOT NULL,
    date DATE NOT NULL,
    numberPerson INT NOT NULL
);
