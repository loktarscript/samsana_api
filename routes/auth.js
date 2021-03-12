var express = require('express');
var router = express.Router();
var controller = require('../src/components/auth/controller');
var response = require('../src/helpers/response');

router.post('/login', (req, res) => {
    controller.login(req.body.email, req.body.password)
        .then((token) => {
            response.success(req, res, token, 200);
        })
        .catch(e => {
            response.error(req, res, 'Información Inválida', 400);
        })
});

router.post('/forgot', (req, res) => {
    controller.forgotPassword(req, res, req.body.email)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, 'Info Inválida', 400, err);
        });
});

module.exports = router;