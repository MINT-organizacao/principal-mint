var database = require("../database/config")

function buscarEmpresaPorCodigo(codigo_ativacao) {
    let instrucaoSql = `select * from empresa where codigo_ativacao = '${codigo_ativacao}'`
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarEmpresaPorCodigo
};