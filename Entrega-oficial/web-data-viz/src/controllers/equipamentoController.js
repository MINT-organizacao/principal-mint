const { response } = require("express");
var equipamentoModel = require("../models/equipamentoModel.js");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome_equipamento = req.body.nome;
    var mac_address = req.body.mac_address;
    var fk_empresa = req.body.fk_empresa;
    

    // Faça as validações dos valores
    if (nome_equipamento == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (mac_address == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Seu código de ativação está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        equipamentoModel.cadastrar(fk_empresa, mac_address, nome_equipamento)
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
    var nome_equipamento = req.body.nome;
    var mac_address = req.body.mac_address;
    var fk_empresa = req.body.fk_empresa;
    

    // Faça as validações dos valores
    if (nome_equipamento == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (mac_address == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Seu código de ativação está undefined!");
    } else {

    equipamentoModel.atualizar(fk_empresa, mac_address, nome_equipamento)
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

function buscarCompPorNome(req, res){
    let nome = req.body.nome;

    equipamentoModel.buscarCompPorNome(nome)
    .then(response => {
        res.json(response).status(200);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    })
}

function cadastrarEquipComp(req, res){
    let idComp = req.body.idComp;
    let fkEquip = req.body.fkEquip;

    cadastrarEquipComp(idComp, fkEquip)
    .then(response => {
        res.json(response).status(200)
    })
    .catch(err => {
        console.log(err);
        res.send(err).status(500);
    })
}

function listar(req, res) {
    let fkEmpresa = req.params.id;

    equipamentoModel.listar(fkEmpresa) 
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

function buscarCompPorEquip(req, res){
    let id = req.params.id;

    equipamentoModel.buscarCompPorEquip(id)
    .then(response => {
        res.json(response).status(200);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

function bucarCompPorId(req, res){
    let id = req.params.id;

    equipamentoModel.bucarCompPorId(id)
        .then(response => {
            res.json(response).status(200);
        })
        .catch(err => {
            res.send(err).status(500);
        })
}

function deletar(req, res) {
     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var mac_address = req.body.mac_address;
    var fk_empresa = req.body.fk_empresa;
    

    // Faça as validações dos valores
    if (mac_address == undefined) {
        res.status(400).send("Seu endereço está undefined!");
    }else if(fk_empresa == undefined){
        res.status(400).send("Seu código de ativação está undefined!");
    } else {

    equipamentoModel.deletar(fk_empresa, mac_address)
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

function getKpis(req, res){
    let fk_empresa = req.params.id;

    equipamentoModel.getKpis(fk_empresa)
    .then(response => {
        res.json(response).status(200);
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500);
    })
}

function getAllComponentes(req, res){
    equipamentoModel.getAllComponentes()
    .then(response => {
        res.json(response).status(200);
    })
    .catch(err => {
        console.log(err);
        res.send(err).status(500);
    })
}

function createManyEquipComp(req, res){
    let fk_equipamento = req.body.fk_equipamento;
    let comps = req.body.comps;
    
    equipamentoModel.createManyEquipComp(fk_equipamento, comps)
    .then(response => {
        res.json(response).status(200);
    })
    .catch(err => {
        console.log(err);
        res.send(err).status(500);
    })
}

module.exports = {
    cadastrar,
    atualizar, 
    listar,
    deletar,
    cadastrarEquipComp,
    buscarCompPorNome,
    buscarCompPorEquip,
    bucarCompPorId,
    getKpis,
    getAllComponentes,
    createManyEquipComp
}
