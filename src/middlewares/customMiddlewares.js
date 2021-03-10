const express = require('express');
const rutasProtegidas = express.Router();
const auth = require('../helpers/auth');

rutasProtegidas.use((req, res, next) => {
    const owner = req.params.id;
    auth.check.own(req, owner);
    next();
})

module.exports = rutasProtegidas;