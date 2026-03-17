module.exports = ({ getEspaciosMetadatosUseCase }) => (app) => {
  app.get("/espacios/metadatos", async (_req, res) => {
    try {
      const data = await getEspaciosMetadatosUseCase.execute();

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({
        message: error.message || "Error obteniendo metadatos",
      });
    }
  });
};