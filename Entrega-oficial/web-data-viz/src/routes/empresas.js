var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/buscarEmpresaPorCodigo/:codigo", function (req, res) {
    empresaController.buscarEmpresaPorCodigo(req, res);
});

module.exports = router;