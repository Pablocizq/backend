const { appServerUrl } = require("../config/appServer");

async function crearReserva(reservaData) {
  const response = await fetch(`${appServerUrl}/reservas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservaData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear la reserva en el app-server");
  }

  return data;
}

async function obtenerMetadatosEspacios() {
  const response = await fetch(`${appServerUrl}/espacios/metadatos`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error obteniendo metadatos de espacios");
  }

  return data;
}

module.exports = {
  crearReserva,
  obtenerMetadatosEspacios,
};