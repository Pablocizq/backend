const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Reserva = sequelize.define(
    "Reserva",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      espacioId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "espacio_id",
      },
      usuarioId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "usuario_id",
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      horaInicio: {
        type: DataTypes.TIME,
        allowNull: false,
        field: "hora_inicio",
      },
      horaFin: {
        type: DataTypes.TIME,
        allowNull: false,
        field: "hora_fin",
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "aceptada",
      },
    },
    {
      tableName: "reservas",
      timestamps: false,
    }
  );

  return Reserva;
};