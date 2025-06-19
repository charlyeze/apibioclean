const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var properties = {};

properties._id = {
  propiedad:'_id',
  name: 'ID',
  type: mongoose.Schema.Types.ObjectId,
  required: true
};
 
properties.fecha = {
  propiedad: "fecha",
  name: 'Fecha',
  type: "Date",
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

properties.n_bar = {
  propiedad: "n_bar",
  name: 'Estación',
  type: "Number",
  required:true
};

properties.nov_1 = {
  propiedad: "nov_1",
  name: 'Novedad 1',
  type: "String",
  index: true,
  required:false
};

properties.nov_2 = {
  propiedad: "nov_2",
  name: 'Novedad 2',
  type: "String",
  index: true,
  required:false
};

properties.nov_3 = {
  propiedad: "nov_3",
  name: 'Novedad 3',
  type: "String",
  index: true,
  required:false
};

properties.cant = {
  propiedad: "cant",
  name: 'Cant',
  type: "Number",
  required: false
};

properties.des = {
  propiedad: "des",
  name: 'Descripción',
  type: "String",
  index: true,
  required:false
};

properties.lat = {
  propiedad: "lat",
  name: 'Latitude',
  type: "String", 
  required:false
};

properties.lng = {
  propiedad: "lng",
  name: 'Longitude',
  type: "String", 
  required:false
};

const schema = mongoose.Schema(properties);

schema.index({ fecha: 1, id_cli: 1, n_bar: 1 }, { unique: true });

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Barrera3', schema);
