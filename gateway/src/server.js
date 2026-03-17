const express = require("express");
const cors = require("cors");
const reservaRoutes = require("./routes/reservasRoutes");
const espacioRoutes = require("./routes/espaciosRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // origen del frontend
  })
);

app.use(express.json());

app.use("/api", reservaRoutes);
app.use("/api", espacioRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Gateway escuchando en el puerto ${PORT}`);
});