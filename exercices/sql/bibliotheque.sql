CREATE DATABASE bibliotheque;
USE bibliotheque;

CREATE TABLE livres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    auteur VARCHAR(100) NOT NULL,
    annee INT,
    genre VARCHAR(50)
);

INSERT INTO livres (titre, auteur, annee, genre) VALUES
('1984', 'George Orwell', 1949, 'Science-fiction'),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 1943, 'Conte'),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 1951, 'Conte'),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 1968, 'Conte'),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 1972, 'Conte');

SELECT * FROM livres;

SELECT * FROM livres WHERE annee > 1950;

SELECT * FROM livres WHERE genre = 'Science-fiction';

SELECT genre, COUNT(*) AS nombre FROM livres GROUP BY genre;



