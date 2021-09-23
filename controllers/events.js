const express = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const getEvents = async (req, res) => {
    res.json({
        ok: true,
        msg: "Get Events",
    });
};

const addEvent = async (req, res) => {
    res.json({
        ok: true,
        msg: "Add Event",
    });
};

const updateEvent = async (req, res) => {
    res.json({
        ok: true,
        msg: "Update Event",
    });
};

const deleteEvent = async (req, res) => {
    res.json({
        ok: true,
        msg: "Delete Event",
    });
};

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
};
