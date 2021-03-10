var express = require('express');
var router = express.Router();
var controller = require('../src/components/usuarios/controller');
var response = require('../src/helpers/response');
var midd = require('../src/middlewares/customMiddlewares');

router.get('/', (req, res) => {
    controller.getAll()
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});


router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    controller.getOneUser(id)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.post('/registro', (req, res)=>{
    const data = req.body;
    controller.saveUser(data)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.patch('/:id', midd, (req, res) =>{
    const {body} = req;
    controller.updateData(req.params.id, body)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.delete('/:id',  (req, res) =>{
    controller.deleteData(req.params.id)
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

router.patch('/change_password/pass/:id',midd, (req, res) =>{
    // res.send('HOLA')
    // console.log(req.params.id);
    controller.changePassword(req.body.oldPass, req.body.newPass, req.body.confirmNewPass, req.params.id )
    .then((data) => {
        response.success(req, res, data, 200);
    })
    .catch((err) => {
        response.error(req, res, 'Info Inválida', 400, err);
    })
});

module.exports = router;