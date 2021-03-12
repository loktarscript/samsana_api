var express = require('express');
var router = express.Router();
var response = require('../../src/helpers/response');
var controller = require('../../src/components/reportes/controller');

router.get('/user_report', (req, res) => {

    controller.createCustomExcel()
        .then((respuesta) => {
            // console.log(respuesta)
            response.success(req, res, respuesta, 200);
        })
        .catch(e => {
            response.error(req, res, 'Información Inválida', 400);
        })

})

module.exports = router;