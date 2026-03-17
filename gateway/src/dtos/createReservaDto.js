function validateCreateReservaDto(body) {
  const { espacioId, usuarioId, fecha, horaInicio, horaFin } = body;

  if (!espacioId) {
    throw new Error("El campo espacioId es obligatorio");
  }

  if (!usuarioId) {
    throw new Error("El campo usuarioId es obligatorio");
  }

  if (!fecha) {
    throw new Error("El campo fecha es obligatorio");
  }

  if (!horaInicio) {
    throw new Error("El campo horaInicio es obligatorio");
  }

  if (!horaFin) {
    throw new Error("El campo horaFin es obligatorio");
  }

  return {
    espacioId: String(espacioId).trim(),
    usuarioId: String(usuarioId).trim(),
    fecha: String(fecha).trim(),
    horaInicio: String(horaInicio).trim(),
    horaFin: String(horaFin).trim(),
  };
}

module.exports = {
  validateCreateReservaDto,
};