const express = require("express");
const espacioController = require("../controllers/espaciosController");

const router = express.Router();

router.get("/espacios/metadatos", espacioController.getMetadatosEspacios);

module.exports = router;