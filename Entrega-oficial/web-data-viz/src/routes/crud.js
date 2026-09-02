var express = require("express");
var router = express.Router();

var crudController = require("../controllers/crudController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    crudController.cadastrar(req, res);
})

router.post("/atualizar", function (req, res) {
    crudController.atualizar(req, res);
});

router.get("/listar", function (req, res) {
    crudController.listar(req, res);
});

router.post("/deletar", function (req, res) {
    crudController.deletar(req, res);
});

module.exports = router;