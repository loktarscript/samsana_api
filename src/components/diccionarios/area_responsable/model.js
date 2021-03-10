const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaResponsableSchema = new Schema({
    nombre : {type: String, required: true},
    activo : {type: String, required: true},
})

module.exports = mongoose.model('Area_Responsable', areaResponsableSchema);