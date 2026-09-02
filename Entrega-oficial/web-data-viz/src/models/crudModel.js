var database = require("../database/config")

function cadastrar(fk_empresa, mac_address, nome_equipamento){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_empresa, mac_address, nome_equipamento);

    var instrucaoSql = `
    INSERT INTO equipamento (fk_empresa, mac_address, nome_equipamento) 
    VALUES (${fk_empresa}, '${mac_address}', '${nome_equipamento}')`
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
    
}

function atualizar(fk_empresa, mac_address, nome_equipamento){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", fk_empresa, mac_address, nome_equipamento);

    var instrucaoSql = `
    UPDATE equipamento
        SET nome_equipamento = '${nome_equipamento}'
        WHERE fk_empresa = ${fk_empresa}
        AND mac_address = '${mac_address}'`
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listar() {
    console.log("function listar():");
    var instrucaoSql = `SELECT fk_empresa,mac_address,nome_equipamento FROM equipamento;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function deletar(fk_empresa, mac_address){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", fk_empresa, mac_address, );

    var instrucaoSql = `
        DELETE FROM equipamento
        WHERE mac_address = '${mac_address}'
        AND fk_empresa = '${fk_empresa}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

// ler tudo 
// select que pega todos 
//

module.exports = {
    cadastrar,
    atualizar,
    listar,
    deletar

}