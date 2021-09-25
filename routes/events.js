const { Router } = require("express");
const { check } = require("express-validator");
const {
    getEvents,
    updateEvent,
    addEvent,
    deleteEvent,
} = require("../controllers/events");
const isDate = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

router.get("/", getEvents);
router.post(
    "/",
    [
        check("title", "El titulo es obligatorio").notEmpty(),
        check("start", "Fecha de incio obligatoria").custom(isDate),
        check("end", "Fecha de finalizacion obligatoria").custom(isDate),
        validarCampos,
    ],
    addEvent
);
router.put(
    "/:id",
    [
        check("title", "El titulo es obligatorio").notEmpty(),
        check("start", "Fecha de incio obligatoria").custom(isDate),
        check("end", "Fecha de finalizacion obligatoria").custom(isDate),
        validarCampos,
    ],
    updateEvent
);
router.delete("/:id", deleteEvent);

// router.post(
//     "/",
//     [
//         check("title", "El titulo es obligatorio").no(),
//         check("password", "El password debe de ser de 6 caracteres").isLength({
//             min: 6,
//         }),
//         validarCampos,
//     ],
//     loginUsuario
// );

module.exports = router;
