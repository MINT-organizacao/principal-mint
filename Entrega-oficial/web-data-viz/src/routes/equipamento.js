var express = require("express");
var router = express.Router();

var equipamentoController = require("../controllers/equipamentoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    equipamentoController.cadastrar(req, res);
})

router.post("/atualizar", function (req, res) {
    equipamentoController.atualizar(req, res);
});

router.get("/listar/:id", function (req, res) {
    equipamentoController.listar(req, res);
});

router.delete("/deletar", function (req, res) {
    equipamentoController.deletar(req, res);
});

router.post("/cadastrarEquipComp", function (req, res) {
    equipamentoController.cadastrarEquipComp(req, res);
});

router.get("/bucarCompPorId/:id", function (req, res){
    equipamentoController.bucarCompPorId(req, res);
})

router.post("/buscarCompPorNome", function (req, res){
    equipamentoController.buscarCompPorNome(req, res);
})

router.get("/buscarCompPorEquip/:id", function (req, res) {
    equipamentoController.buscarCompPorEquip(req, res);
})

router.get("/getKpis/:id", function (req, res){
    equipamentoController.getKpis(req, res);
})

router.get("/getAllComponentes", function (req, res){
    equipamentoController.getAllComponentes(req, res);
})

router.post("/createManyEquipComp", function (req, res) {
    equipamentoController.createManyEquipComp(req, res);
})

module.exports = router;