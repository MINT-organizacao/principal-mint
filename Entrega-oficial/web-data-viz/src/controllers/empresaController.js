var emrpresaModel = require("../models/empresaModel");

function buscarEmpresaPorCodigo(req, res){
    let codigo_ativacao = req.params.codigo
    emrpresaModel.buscarEmpresaPorCodigo(codigo_ativacao).then(response=>{
        if(response.length > 0){
             res.status(200).json(response)
        }else{
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(error=>{
        console.log(error);
        console.log("Houve um erro ao buscar as aulas pelo ID.", error.sqlMessage);
        res.status(500).json(error.sqlMessage);
    })
}


module.exports = {
    buscarEmpresaPorCodigo
}