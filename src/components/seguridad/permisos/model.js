const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const permisosSchema = new Schema({
    nombre: {type: String, required: true},
    accesos: [{
        method: {type: String, required: true},
        value : {type: Boolean, required: true}
    }]
});

module.exports = mongoose.model('Permisos', permisosSchema);