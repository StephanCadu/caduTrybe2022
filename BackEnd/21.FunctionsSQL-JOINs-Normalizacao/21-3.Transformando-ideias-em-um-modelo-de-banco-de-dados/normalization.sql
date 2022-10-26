DROP DATABASE IF EXISTS normalization;
CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE `setor` (
  `setor_id` INT NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  CONSTRAINT `setor_id_key` PRIMARY KEY (`setor_id`)
) ENGINE=InnoDB;

CREATE TABLE `cadastro` (
  `cadastro_id` INT NOT NULL AUTO_INCREMENT,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `cadastro_id_key` PRIMARY KEY (`cadastro_id`)
) ENGINE=InnoDB;

CREATE TABLE `funcionario` (
  `funcionario_id` INT NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cadastro_id` INT NOT NULL,
  `setor_id` INT NOT NULL,
  CONSTRAINT `funcionario_id_key` PRIMARY KEY (`funcionario_id`),
  CONSTRAINT `fk_funcionario_cadastro` FOREIGN KEY (`cadastro_id`) REFERENCES `cadastro` (`cadastro_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_funcionario_setor` FOREIGN KEY (`setor_id`) REFERENCES `setor` (`setor_id`) ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE `contato` (
  `contato_id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `tel_1` INT NOT NULL,
  `tel_2` INT DEFAULT NULL,
  `funcionario_id` INT NOT NULL,
  CONSTRAINT `fk_funcionario_contato` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionario` (`funcionario_id`) ON UPDATE CASCADE
) ENGINE=InnoDB;

INSERT INTO setor (nome)
VALUES
	  ('Administração'),
	  ('Vendas'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing');

INSERT INTO funcionario (nome, sobrenome, email, setor_id)
VALUES
	  ('Joseph', 'Rodrigues', 'jo@gmail.com', 2),
    ('André', 'Freeman', 'andre1990@gmail.com', 3),
    ('Cíntia', 'Duval', 'cindy@outlook.com', 4),
    ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', 5);

INSERT INTO contato (tel_1, funcionario_id)
VALUES
	  ('(35)998552-1445', 1),
    ('(47)99522-4996', 2),
    ('(33)99855-4669', 3),
    ('(33)99200-1556', 4);
