const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

//Creacion servidor
const app = express();

//Base de datos
dbConnection();

app.use(cors());

const puerto = process.env.PORT;

// Directorio publico
app.use(express.static("public"));

// Lectura y parse body

app.use(express.json());

//User: ivangrestorres Pass FjJyjGS8f1vSP0MB

app.use("/api/auth", require("./routes/auth"));

//TODO: CRUD: Eventos

app.listen(
    puerto,
    console.log(`Servidor en el puerto http://localhost:${puerto}/`)
);
