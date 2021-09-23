const { Router } = require("express");
const { check } = require("express-validator");
const {
    getEvents,
    updateEvent,
    addEvent,
    deleteEvent,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

router.get("/", getEvents);
router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

// router.post(
//     "/",
//     [
//         check("email", "El email es obligatorio").isEmail(),
//         check("password", "El password debe de ser de 6 caracteres").isLength({
//             min: 6,
//         }),
//         validarCampos,
//     ],
//     loginUsuario
// );

module.exports = router;
