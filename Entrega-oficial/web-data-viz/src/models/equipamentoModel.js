var database = require("../database/config")

function cadastrar(fk_empresa, mac_address, nome_equipamento){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fk_empresa, mac_address, nome_equipamento);

    var instrucaoSql = `
    INSERT INTO equipamento (fk_empresa, mac_address, nome_equipamento) 
    VALUES (${fk_empresa}, '${mac_address}', '${nome_equipamento}')`
     console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
    
}

function buscarCompPorNome(nome){
    var instrucaoSql = `SELECT id FROM mintBD.componente_monitorado WHERE nome_comp = '${nome}';`;

    return database.executar(instrucaoSql);
}

function cadatrarEquipComp(fkComp, fkEquip){
    let instrucaoSql = `INSERT INTO equip_comp (fk_equipamento, fk_componente) VALUE (${fkEquip}, ${fkComp})`

    return database.executar(instrucaoSql)
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

function atualizarEquipComp(fk_equipamento, fk_componente, limite){
    var instrucaoSql = `
        UPDATE equip_comp
            SET 
    `;
}

function listar(fkEmpresa) {
    console.log("function listar():");
    var instrucaoSql = `SELECT id,fk_empresa,mac_address,nome_equipamento FROM equipamento WHERE fk_empresa = ${fkEmpresa};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function bucarCompPorId(id){
    var instrucaoSql = `SELECT * FROM componente_monitorado WHERE id = ${id}`;
    
    return database.executar(instrucaoSql);
}

function buscarCompPorEquip(id){
    var instrucaoSql = `SELECT c.id, c.nome_comp, e.limite_maximo FROM equip_comp e JOIN componente_monitorado c ON c.id = e.fk_componente WHERE e.fk_equipamento = ${id};
`;

    return database.executar(instrucaoSql);
}

function deletar(fk_empresa, mac_address){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", fk_empresa, mac_address, );

    var instrucaoSql = `
        DELETE FROM equipamento
        WHERE mac_address = '${mac_address}'
        AND fk_empresa = ${fk_empresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function getKpis(fk_empresa){
    var instrucaoSql =`
        SELECT
	(SELECT COUNT(*) FROM equipamento WHERE fk_empresa = ${fk_empresa}) as total,
	(SELECT COUNT(ec.fk_equipamento) FROM equipamento e 
		JOIN equip_comp ec
			ON e.id = ec.fk_equipamento
		WHERE situacao = 'ativo' AND e.fk_empresa = ${fk_empresa}) as ativos,
	(SELECT COUNT(ec.fk_equipamento) FROM equipamento e 
		JOIN equip_comp ec
			ON e.id = ec.fk_equipamento
		WHERE situacao = 'inativo' AND e.fk_empresa = ${fk_empresa}) as inativos;
    `

    return database.executar(instrucaoSql);
}

function getAllComponentes(){
    let instrucaoSql = `SELECT id, nome_comp FROM componente_monitorado;`;

    return database.executar(instrucaoSql);
}

function createManyEquipComp(fk_equipamento, comps){
    let inserts = ""
    
    for(let i = 0; i < comps.length; i++){
        if(i+1 == comps.length){
            inserts += `(${comps[i].id}, ${fk_equipamento}, ${comps[i].limite});`
            continue;
        }

        inserts += `(${comps[i].id}, ${fk_equipamento}, 80),`
    }

    let instrucaoSql = `INSERT INTO equip_comp (fk_componente, fk_equipamento, limite_maximo) VALUES ${inserts}`;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

// ler tudo 
// select que pega todos 
//

module.exports = {
    cadastrar,
    atualizar,
    listar,
    deletar,
    buscarCompPorNome,
    cadatrarEquipComp,
    buscarCompPorEquip,
    bucarCompPorId,
    getKpis,
    getAllComponentes,
    createManyEquipComp
}