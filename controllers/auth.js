const express = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = express.response) => {
    const { email, password } = req.body;
    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "Un usuario existe con este correo",
            });
        }

        usuario = new Usuario(req.body);

        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        const token = await generarJWT(usuario.id, usuario.name);

        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

const loginUsuario = async (req, res = express.response) => {
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: "No existe usuario con este correo",
            });
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.json({
                ok: false,
                msg: "Contraseña incorrecta",
            });
        }

        const token = await generarJWT(usuario.id, usuario.name);

        return res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador",
        });
    }
};

const revalidarToken = async (req, res) => {
    const { uid, name } = req;

    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        token,
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};
