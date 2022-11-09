DROP DATABASE IF EXISTS zoo;
CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE gerente (
	gerente_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    PRIMARY KEY (gerente_id)
) ENGINE=InnoDB;

CREATE TABLE cuidador (
	cuidador_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    gerente_id INT NOT NULL,
    PRIMARY KEY (cuidador_id),
    CONSTRAINT fk_gerente_id FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
) ENGINE=InnoDB;

CREATE TABLE especie (
	especie_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    PRIMARY KEY (especie_id)
) ENGINE=InnoDB;

CREATE TABLE localizacao (
	localizacao_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    PRIMARY KEY (localizacao_id)
) ENGINE=InnoDB;

CREATE TABLE animal (
	animal_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sexo VARCHAR(15) NOT NULL,
    idade INT(3) NOT NULL,
    especie_id INT NOT NULL,
    localizacao_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    PRIMARY KEY (animal_id),
    CONSTRAINT fk_especie_id FOREIGN KEY (especie_id) REFERENCES especie (especie_id),
    CONSTRAINT fk_localizacao_id FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id),
    CONSTRAINT fk_cuidador_id FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
) ENGINE=InnoDB;

SELECT * FROM gerente;

INSERT INTO gerente (nome, sobrenome)
VALUES
	  ('Luan', 'Oliveira'),
    ('Tiago', 'Lemos');

SELECT * FROM cuidador;

INSERT INTO cuidador (nome, sobrenome, gerente_id)
VALUES
	  ('Rodney', 'Mullen', 2),
    ('Guilherme', 'Abe', 1),
    ('Felipe', 'Mota', 2);

SELECT * FROM localizacao;

INSERT INTO localizacao (nome)
VALUES
	  ('Norte'),
    ('Sul'),
    ('Leste'),
    ('Oeste');

SELECT * FROM especie;

INSERT INTO especie (nome)
VALUES
	  ('Onça'),
    ('Leão'),
    ('Cavalo');

SELECT * FROM animal;

INSERT INTO animal (nome, sexo, idade, especie_id, localizacao_id, cuidador_id)
VALUES
	  ('Gertrudes', 'Fêmea', 20, 3, 3, 2),
    ('Rodolfo', 'Macho', 27, 1, 1, 1),
    ('Fanfarrão', 'Macho', 12, 3, 2, 3),
    ('Godofredo', 'Macho', 4, 3, 4, 3),
    ('Antonieta', 'Fêmea', 16, 2, 4, 1);