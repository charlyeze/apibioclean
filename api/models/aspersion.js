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

properties.des = {
    propiedad: "des",
    name: 'Descripción',
    type: "String",
    index: true,
    required:false
};


const schema = mongoose.Schema(properties);

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Aspersion', schema);
