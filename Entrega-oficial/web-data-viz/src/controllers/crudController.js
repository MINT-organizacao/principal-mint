var crudModel = require("../models/crudModel.js");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome_equipamento = req.body.nomeServer;
    var mac_address = req.body.mac_addressServer;
    var fk_empresa = req.body.fk_empresaServer
    

    // Faça as validações dos valores
    if (nome_equipamento == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (mac_address == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Seu código de ativação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        crudModel.cadastrar(fk_empresa, mac_address, nome_equipamento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atualizar(req, res){
     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome_equipamento = req.body.nomeServer;
    var mac_address = req.body.mac_addressServer;
    var fk_empresa = req.body.fk_empresaServer
    

    // Faça as validações dos valores
    if (nome_equipamento == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (mac_address == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Seu código de ativação está undefined!");
    } else {

    crudModel.atualizar(fk_empresa, mac_address, nome_equipamento)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao autualizar   Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listar(req, res) {
    crudModel.listar() 
        .then(function (resultado) { 
            res.json(resultado); 
        }) 
        .catch(function (erro) { 
            console.log(erro); 
            console.log( 
                "\nHouve um erro ao listar os equipamentos Erro: ", 
                erro.sqlMessage 
            ); 
            res.status(500).json(erro.sqlMessage); 
        }); 
}

function deletar(req, res) {
     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var mac_address = req.body.mac_addressServer;
    var fk_empresa = req.body.fk_empresaServer
    

    // Faça as validações dos valores
    if (mac_address == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Seu código de ativação está undefined!");
    } else {

    crudModel.deletar(fk_empresa, mac_address)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao deletar  Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
    }
}

module.exports = {
    cadastrar,
    atualizar, 
    listar,
    deletar
}
