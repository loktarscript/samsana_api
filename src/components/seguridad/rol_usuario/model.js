const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rolUsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    accesos: {type: Schema.Types.ObjectId, ref: 'Permisos'}
});

module.exports = mongoose.model('Rol_Usuario', rolUsuarioSchema);