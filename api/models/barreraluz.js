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

properties.controlado = {
  propiedad: "controlado",
  name: 'Controlado',
  type: "Boolean",
  required:false
};

properties.cambio_placa = {
  propiedad: "cambio_placa",
  name: 'Cambio Placa',
  type: "Boolean",
  required:false
};

properties.verificacion = {
  propiedad: "verificacion",
  name: 'Verificación',
  type: "Boolean",
  required:false
};

properties.equipo_apagado = {
  propiedad: "equipo_apagado",
  name: 'Equipo Apagado',
  type: "Boolean",
  required:false
};

properties.sector = {
  propiedad: "sector",
  name: 'Sector',
  type: "String",
  required:false
};

properties.mosca = {
  propiedad: "mosca",
  name: 'Mosca',
  type: "Number",
  required:false
};

properties.polilla = {
  propiedad: "polilla",
  name: 'Polilla',
  type: "Number",
  required:false
};

properties.insecto = {
  propiedad: "insecto",
  name: 'Insecto',
  type: "Number",
  required:false
};

properties.des = {
  propiedad: "des",
  name: 'Descrićión',
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

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Barreraluz', schema);
