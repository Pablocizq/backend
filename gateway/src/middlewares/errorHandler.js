function errorHandler(err, req, res, next) {
  console.error("Error en gateway:", err);

  return res.status(500).json({
    message: "Error interno del gateway",
  });
}

module.exports = errorHandler;