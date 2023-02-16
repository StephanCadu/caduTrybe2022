DROP DATABASE IF EXISTS albuns;
CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE genero (
	genero_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    PRIMARY KEY (genero_id)
) ENGINE=InnoDB;

CREATE TABLE artista (
	artista_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (artista_id)
) ENGINE=InnoDB;

CREATE TABLE album (
	album_id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    genero_id INT NOT NULL,
    artista_id INT NOT NULL,
    PRIMARY KEY (album_id),
    CONSTRAINT fk_genero_id FOREIGN KEY (genero_id) REFERENCES genero (genero_id),
    CONSTRAINT fk_artista_id FOREIGN KEY (artista_id) REFERENCES artista (artista_id)
) ENGINE=InnoDB;

CREATE TABLE musica (
	musica_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    genero_id INT NOT NULL,
    artista_id INT NOT NULL,
    album_id INT NOT NULL,
    PRIMARY KEY (musica_id),
    CONSTRAINT fk_musica_genero_id FOREIGN KEY (genero_id) REFERENCES genero (genero_id),
    CONSTRAINT fk_musica_artista_id FOREIGN KEY (artista_id) REFERENCES artista (artista_id),
    CONSTRAINT fk_musica_album_id FOREIGN KEY (album_id) REFERENCES album (album_id)
) ENGINE=InnoDB;