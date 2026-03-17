const express = require("express");
const reservaController = require("../controllers/reservasController");
const validateDto = require("../middlewares/validateDto");
const { validateCreateReservaDto } = require("../dtos/createReservaDto");

const router = express.Router();

router.post(
  "/reservas",
  validateDto(validateCreateReservaDto),
  reservaController.crearReserva
);

module.exports = router;