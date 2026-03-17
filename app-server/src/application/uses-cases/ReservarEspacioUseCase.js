class ReservarEspacioUseCase {
  constructor({ espacioRepository, reservaRepository, ReservaEntity }) {
    this.espacioRepository = espacioRepository;
    this.reservaRepository = reservaRepository;
    this.ReservaEntity = ReservaEntity;
  }

  async execute({ espacioId, usuarioId, fecha, horaInicio, horaFin }) {
    if (!espacioId) {
      throw new Error("El id del espacio es obligatorio");
    }

    if (!usuarioId) {
      throw new Error("El id del usuario es obligatorio");
    }

    if (!fecha || !horaInicio || !horaFin) {
      throw new Error("Fecha, hora de inicio y hora de fin son obligatorias");
    }

    if (horaInicio >= horaFin) {
      throw new Error("La hora de inicio debe ser anterior a la hora de fin");
    }

    const espacio = await this.espacioRepository.findById(espacioId);

    if (!espacio) {
      throw new Error("El espacio no existe");
    }

    if (!espacio.reservable) {
      throw new Error("El espacio no es reservable");
    }

    const solapadas = await this.reservaRepository.findSolapadas(
      espacioId,
      fecha,
      horaInicio,
      horaFin
    );

    if (solapadas.length > 0) {
      throw new Error("Ya existe una reserva para ese espacio en esa franja horaria");
    }

    const reserva = new this.ReservaEntity({
      espacioId,
      usuarioId,
      fecha,
      horaInicio,
      horaFin,
      estado: "aceptada",
    });

    return await this.reservaRepository.save(reserva);
  }
}

module.exports = ReservarEspacioUseCase;