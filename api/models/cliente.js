const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var properties = {};

properties._id = {
  propiedad: "_id",
  name:"ID",
  type: mongoose.Schema.Types.ObjectId,
  required: true
};

properties.razon_social = {
  propiedad: "razon_social",
  name: "Razon Social",
  type: "String",
  uppercase: true,
  index: true,
  required:true
};

properties.dir_cli = {
  propiedad: "dir_cli",
  name: "Dirección",
  type: "String",
  index: true,
  required:false
};

properties.loc_cli = {
  propiedad: "loc_cli",
  name: "Localidad",
  type: "String",
  required:false
};

properties.tel_cli = {
  propiedad: "tel_cli",
  name: "Teléfono",
  type: "String",
  required:false
};

properties.cuit_cli = {
  propiedad: "cuit_cli",
  name: "CUIT",
  type: "String",
  index: true,
  required:false
};

properties.bar_1 = {
  propiedad: "bar_1",
  name: "Bar 1",
  type: "Number",
  required:false
};
   
properties.bar_2 = {
  propiedad: "bar_2",
  name: "Bar 2",
  type: "Number",
  required:false
};

properties.bar_3 = {
  propiedad: "bar_3",
  name: "Bar 3",
  type: "Number",
  required:false
};

properties.bar_4 = {
  propiedad: "bar_4",
  name: "Bar 4",
  type: "Number",
  required:false
};

properties.bar_luz = {
  propiedad: "bar_luz",
  name: "Luz 1",
  type: "Number",
  required:false
};

properties.bar_luz2 = {
  propiedad: "bar_luz2",
  name: "Luz 2",
  type: "Number",
  required:false
};

properties.bar_luz3 = {
  propiedad: "bar_luz3",
  name: "Luz 3",
  type: "Number",
  required:false
};

properties.bar_luz4 = {
  propiedad: "bar_luz4",
  name: "Luz 4",
  type: "Number",
  required:false
};

properties.bar_luz5 = {
  propiedad: "bar_luz5",
  name: "Luz 5",
  type: "Number",
  required:false
};

properties.usuario = {
  propiedad: "usuario",
  name: "Usuario",
  type: mongoose.Schema.Types.ObjectId,
  ref: "Usuario",
  required: true, 
  index: true
};

properties.ini_bar_1 = {
  propiedad: "ini_bar_1",
  name: "Bar 1",
  type: "Number",
  required:false
};
   
properties.ini_bar_2 = {
  propiedad: "ini_bar_2",
  name: "Bar 2",
  type: "Number",
  required:false
};

properties.ini_bar_3 = {
  propiedad: "ini_bar_3",
  name: "Bar 3",
  type: "Number",
  required:false
};

properties.ini_bar_4 = {
  propiedad: "ini_bar_4",
  name: "Bar 4",
  type: "Number",
  required:false
};

properties.ini_bar_luz = {
  propiedad: "ini_bar_luz",
  name: "Luz 1",
  type: "Number",
  required:false
};

properties.ini_bar_luz2 = {
  propiedad: "ini_bar_luz2",
  name: "Luz 2",
  type: "Number",
  required:false
};

properties.ini_bar_luz3 = {
  propiedad: "ini_bar_luz3",
  name: "Luz 3",
  type: "Number",
  required:false
};

properties.ini_bar_luz4 = {
  propiedad: "ini_bar_luz4",
  name: "Luz 4",
  type: "Number",
  required:false
};

properties.ini_bar_luz5 = {
  propiedad: "ini_bar_luz5",
  name: "Luz 5",
  type: "Number",
  required:false
};

const schema = mongoose.Schema(properties);

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Cliente', schema);
