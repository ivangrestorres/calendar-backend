const express = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const Evento = require("../models/Evento");

const getEvents = async (req, res) => {
    const events = await Evento.find().populate("user", "name");

    return res.json({
        ok: true,
        events,
    });
};

const addEvent = async (req, res) => {
    const eventoGuardado = new Evento(req.body);

    try {
        eventoGuardado.user = req.uid;
        eventoGuardado.save();
        return res.json({
            ok: true,
            evento: eventoGuardado,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador",
        });
    }
};

const updateEvent = async (req, res) => {
    const { uid, params } = req;
    const eventId = params.id;

    try {
        const event = await Evento.findById(eventId);
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: "Evento no existe",
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "Usuario sin permisos",
            });
        }

        const newEvent = { ...req.body, user: uid };
        const eventUpdate = await Evento.findByIdAndUpdate(eventId, newEvent, {
            new: true, //Esto hace que devuelva lo que acabamos de añadir
        });

        return res.json({
            ok: true,
            evento: eventUpdate,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador",
        });
    }
};

const deleteEvent = async (req, res) => {
    const { uid, params } = req;
    const eventId = params.id;

    try {
        const event = await Evento.findById(eventId);
        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: "Evento no existe",
            });
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "Usuario sin permisos",
            });
        }

        await Evento.findByIdAndDelete(eventId);

        return res.json({
            ok: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Hable con el Administrador",
        });
    }
};

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
};
