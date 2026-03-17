const express = require("express");

const { conectar, Espacio, Reserva } = require("./infrastructure/database");

const SequelizeEspacioRepository = require("./infrastructure/repositories/SequelizeEspacioRepository");
const SequelizeReservaRepository = require("./infrastructure/repositories/SequelizeReservaRepository");

const GetEspaciosMetadatosUseCase = require("./application/uses-cases/GetEspaciosMetadatosUseCase");
const ReservarEspacioUseCase = require("./application/uses-cases/ReservarEspacioUseCase");

const ReservaEntity = require("./domain/entities/Reserva");
const EspacioEntity = require("./domain/entities/Espacio");

const reservasRoutes = require("./http/reservasRoutes");
const espaciosRoutes = require("./http/espaciosRoutes");

const PORT = process.env.APP_SERVER_PORT || 4000;

async function main() {
  await conectar();

  const espacioRepository = new SequelizeEspacioRepository({
    EspacioModel: Espacio,
  });

  const reservaRepository = new SequelizeReservaRepository({
    ReservaModel: Reserva,
  });

  const getEspaciosMetadatosUseCase = new GetEspaciosMetadatosUseCase({
    espacioRepository,
  });

  const reservarEspacioUseCase = new ReservarEspacioUseCase({
    espacioRepository,
    reservaRepository,
    ReservaEntity,
  });

  const app = express();
  app.use(express.json());

  app.get("/", (_req, res) => {
    res.json({ ok: true, service: "app-server" });
  });

  // Registrar rutas
  espaciosRoutes({ getEspaciosMetadatosUseCase })(app);
  reservasRoutes({ reservarEspacioUseCase })(app);

  app.listen(PORT, () => {
    console.log(`App-server running on port ${PORT}`);
  });
}

main().catch(console.error);