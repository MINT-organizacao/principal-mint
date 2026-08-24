CREATE DATABASE mintBD;
USE mintBD;


CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40),
    email VARCHAR(40),
    senha VARCHAR(255), 
    papel_usuario VARCHAR(20)
);


CREATE TABLE maquinas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    mac_address VARCHAR(17) UNIQUE NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    quantidade_ram DECIMAL(10,2),
    quantidade_mem_disco DECIMAL(10,2),
    modelo_processador VARCHAR(150)
);


CREATE TABLE alertas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    maquina_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL, 
    severidade VARCHAR(20) NOT NULL, 
    
    uso_cpu DECIMAL(5,2),   
    uso_ram DECIMAL(5,2),   
    uso_disco DECIMAL(5,2), 
    
    data_captura_maquina DATETIME NOT NULL,
    recebido_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    
    status_resolucao VARCHAR(20) DEFAULT 'Pendente', 
    
    FOREIGN KEY (maquina_id) REFERENCES maquinas(id) ON DELETE CASCADE,
    CONSTRAINT chk_severidade CHECK (severidade IN ('Aviso', 'Critico')),
    CONSTRAINT chk_status CHECK (status_resolucao IN ('Pendente', 'Resolvido'))
);


