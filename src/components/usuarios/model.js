const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombres : {type: String, required: true},
    apellidos : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    profile_image  : {type: String, required: true},
    area_responsable: {type: Schema.Types.ObjectId, ref: 'Area_Responsable'},
    created_at : { type : Date, default: Date.now() },
    updated_at : { type : Date, default: Date.now()}
});

usuarioSchema.pre('save', (next)=>{
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) this.created_at = now;
    next();
});

module.exports = mongoose.model('Usuarios', usuarioSchema);

