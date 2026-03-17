module.exports = ({ reservarEspacioUseCase }) => (app) => {
  app.post("/reservas", async (req, res) => {
    try {
      const { espacioId, usuarioId, fecha, horaInicio, horaFin } = req.body;

      const resultado = await reservarEspacioUseCase.execute({
        espacioId,
        usuarioId,
        fecha,
        horaInicio,
        horaFin,
      });

      res.status(201).json(resultado);
    } catch (error) {
      res.status(400).json({
        message: error.message || "Error procesando la reserva",
      });
    }
  });
};