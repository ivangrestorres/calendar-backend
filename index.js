const express = require("express");

const app = express();

const puerto = 4000;

app.get("/", (req, res) => {
    res.json({
        ok: true,
    });
});

app.listen(
    puerto,
    console.log(`Servidor en el puerto http://localhost:${puerto}/`)
);
