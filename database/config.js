const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DN_CON);
        console.log("DB Online");
    } catch (error) {
        console.error(error);
        throw new Error("Error al inicializar la BBDD");
    }
};

module.exports = { dbConnection };
