const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var properties = {};

properties._id = {
    propiedad: "_id",
    name: 'ID',
    type: mongoose.Schema.Types.ObjectId,
    required: true
};

properties.fecha = {
    propiedad: "fecha",
    name: 'Fecha',
    type: "Date",
    index: true,
    required:true
}; 
 
properties.id_cli = {
    propiedad: "id_cli",
    name: 'Cliente',
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true, 
    index: true
};

properties.tipo = {
    propiedad: "tipo",
    name: 'Tipo',
    type: "Number",
    index: true,
    required:false
};

properties.est = {
    propiedad: "est",
    name: 'Estado',
    type: "Boolean",
    required:false
};

properties.cant = {
    propiedad: "cant",
    name: 'Cantidad',
    type: "Number",
    required:false
};

properties.obs = {
    propiedad: "obs",
    name: 'Observación',
    type: "String",
    index: true,
    required:false
};

const schema = mongoose.Schema(properties);

schema.index({ fecha: 1, id_cli: 1, tipo: 1 }, { unique: true });

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Avistamiento', schema);
