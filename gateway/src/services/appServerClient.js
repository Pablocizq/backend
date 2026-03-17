const httpClient = require("./appServerHttpClient");

module.exports = {
  crearReserva: httpClient.crearReserva,
  obtenerMetadatosEspacios: httpClient.obtenerMetadatosEspacios,
};