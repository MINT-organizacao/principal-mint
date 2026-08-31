CREATE DATABASE mintBD;
USE mintBD;

CREATE TABLE empresa(
	id INT PRIMARY KEY AUTO_INCREMENT,
    razao_social VARCHAR(200),
    codigo_ativacao VARCHAR(50),
	fk_matriz INT,
    CONSTRAINT chk_fk_matriz FOREIGN KEY (fk_matriz) REFERENCES empresa(id)
);

CREATE TABLE telefone(
	id INT PRIMARY KEY AUTO_INCREMENT,
    telefone CHAR(11),
    fk_empresa INT,
    CONSTRAINT chk_fk_empresa_tl FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE endereco(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fk_empresa INT,
    cep CHAR(8),
    logradouro VARCHAR(100),
    numero INT,
    complemento VARCHAR(100),
    estado CHAR(2),
    municipio VARCHAR(50),
    CONSTRAINT chk_fk_empresa_end FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);


CREATE TABLE usuario(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40),
    email VARCHAR(40),
    senha VARCHAR(255), 
    papel_usuario VARCHAR(20),
    fk_empresa INT,
    CONSTRAINT chk_fk_empresa_us FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE equipamento(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_empresa INT,
    mac_address VARCHAR(17) UNIQUE NOT NULL,
    nome_equipamento VARCHAR(100) NOT NULL,
    CONSTRAINT chk_fk_empresa_maq FOREIGN KEY (fk_empresa) REFERENCES empresa(id) 
);

CREATE TABLE componente_monitorado(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome_comp VARCHAR(200),
    tipo_valor VARCHAR(200),
    parametro_lib VARCHAR(100)
);

CREATE TABLE equip_comp(
	id INT PRIMARY KEY,
    fk_equipamento INT,
    fk_componente INT,
    situacao VARCHAR(100) default 'ativo',
    
    CONSTRAINT chk_fk_equipamento_ec FOREIGN KEY (fk_equipamento) REFERENCES equipamento(id),
    CONSTRAINT chk_fk_componente_ec FOREIGN KEY (fk_componente) REFERENCES componente_monitorado(id),
    CONSTRAINT chk_situacao_ec CHECK (situacao in ('ativo','inativo'))
);

/* CREATE TABLE alertas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    descricao VARCHAR(255) NOT NULL, 
    severidade VARCHAR(20) NOT NULL, 
    
    data_captura_equipamento DATETIME NOT NULL,
    recebido_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    
    status_resolucao VARCHAR(20) DEFAULT 'Pendente', 

    CONSTRAINT chk_severidade CHECK (severidade IN ('Alto', 'Critico')),
    CONSTRAINT chk_status CHECK (status_resolucao IN ('Pendente', 'Resolvido'))
);
*/

CREATE USER user_crud IDENTIFIED BY 'Sptech#2026';
GRANT INSERT, SELECT, UPDATE, DELETE ON mintDB.* TO user_crud;  
FLUSH PRIVILEGES;