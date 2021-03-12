var express = require('express');
var router = express.Router();
var controller = require('../src/components/auth/controller');
var response = require('../src/helpers/response');
var toExcel = require('../src/utils/toExcel');
var customExcel = require('../src/utils/customExcel');
var userController = require('../src/components/usuarios/controller');
router.get('/test/:id', (req, res)=>{
    userController.getOneUser(req.params.id)
    .then(data =>{
        console.log(data);
        customExcel.createCustomExcel(data)
        .then((respuesta) => {
            console.log(respuesta)
        response.success(req, res, respuesta, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Información Inválida', 400);
    })
    })
    
})

router.post('/login',  (req, res) =>{
    controller.login(req.body.email, req.body.password)
    .then((token) => {
        response.success(req, res, token, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Información Inválida', 400);
    })
});

router.post('/forgot', (req, res) =>{
    controller.forgotPassword(req, res, req.body.email)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    });
});

module.exports = router;