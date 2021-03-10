const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaTicketSchema = new Schema({
    nombre : {type: String, required: true},
    active : {type: String, required: true}
});

module.exports = mongoose.model('Categoria_Ticket', categoriaTicketSchema);