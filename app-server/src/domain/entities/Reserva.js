class Reserva {
  constructor({
    id = null,
    espacioId,
    usuarioId,
    fecha,
    horaInicio,
    horaFin,
    estado = "aceptada",
  }) {
    this.id = id;
    this.espacioId = espacioId;
    this.usuarioId = usuarioId;
    this.fecha = fecha; // formato esperado: YYYY-MM-DD
    this.horaInicio = horaInicio; // formato esperado: HH:mm
    this.horaFin = horaFin; // formato esperado: HH:mm
    this.estado = estado;
  }
}

module.exports = Reserva;