const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grupoSchema = new Schema({
    nombre: {type: String, required: true},
    area_responsable: [{type: Schema.Types.ObjectId, ref: 'Area_Responsable', default: []}]
});

module.exports = mongoose.model('Grupos', grupoSchema);