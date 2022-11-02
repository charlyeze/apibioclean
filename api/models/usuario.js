const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');

var properties = {};

properties._id = {
  propiedad: "_id",
  name: 'ID',
  type: mongoose.Schema.Types.ObjectId,
  required: true
};

properties.nombre = {
  propiedad: "nombre",
  name: 'Nombre',
  type: "String",
  index: true,
  required:true
};

properties.username = {
  propiedad: "username",
  name: 'Usuario',
  type: "String",
  index: true,
  required:true,
  unique:true
};

properties.password = {
  propiedad: "password",
  name: 'Password',
  type: "String",
  required:true
};

properties.email = {
  propiedad: "email",
  name: 'Email',
  type: "String",
  lowercase: true,
  index: true
};

properties.tipo = {
  propiedad: "tipo",
  name: 'Tipo',
  type: "String",
  index: true,
  required:true
};

const schema = mongoose.Schema(properties);

schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Usuario', schema);
