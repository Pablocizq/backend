class ReservaRepository {
  async save(_reserva) {
    throw new Error("Método save() no implementado");
  }

  async findSolapadas(_espacioId, _fecha, _horaInicio, _horaFin) {
    throw new Error("Método findSolapadas() no implementado");
  }

  async findById(_id) {
    throw new Error("Método findById() no implementado");
  }

  async findByUsuario(_usuarioId) {
    throw new Error("Método findByUsuario() no implementado");
  }
}

module.exports = ReservaRepository;