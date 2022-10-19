-- TRIGGERS

-- são blocos de código disparados após uma determinada ação

-- ESTRUTURA:
--  DELIMITER $$
--  CREATE TRIGGER nome_do_trigger
--  [BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
--  FOR EACH ROW
--  BEGIN
      -- o código SQL entra aqui
--  END $$
--  DELIMITER ;

-- DATABASE para os exemplos:
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

-- EXEMPLOS:

-- TRIGGER para o INSERT
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);
SELECT * FROM perfil;

-- TRIGGER para o UPDATE
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;

UPDATE perfil SET saldo = 3000 WHERE perfil_id = 1;
SELECT * FROM perfil;

-- TRIGGER para o DELETE
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;

DELETE FROM perfil WHERE perfil_id = 1;
SELECT * FROM log_perfil;

-- DATABASE para os exercícios
CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

-- EXERCÍCIOS

-- 1
DELIMITER $$

CREATE TRIGGER AtualizaDataAoInserirCarro
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = CURRENT_DATE(),
		NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO carros(preco) VALUES(99999);
SELECT * FROM carros;

-- 2
DELIMITER $$

CREATE TRIGGER AtualizaDataAoAlterarCarro
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = CURRENT_DATE(),
		NEW.acao = 'ATUALIZAÇÃO',
        NEW.disponivel_em_estoque = OLD.disponivel_em_estoque + 1;
END $$

DELIMITER ;

UPDATE carros SET preco = 123456 WHERE id_carro = 2;
SELECT * FROM carros;

-- 3
DELIMITER $$

CREATE TRIGGER AtualizarDataAoDeletarCarro
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes (tipo_operacao, data_ocorrido) VALUES ('EXCLUSÃO', CURRENT_DATE());
END $$

DELIMITER ;

DELETE FROM carros WHERE id_carro = 1;
SELECT * FROM log_operacoes;
