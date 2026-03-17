const appServerClient = require("../services/appServerClient");

async function getMetadatosEspacios(req, res, next) {
  try {
    const data = await appServerClient.obtenerMetadatosEspacios();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getMetadatosEspacios,
};