
const mongoose = require('mongoose');

const Aspersion = require('../models/aspersion');
const Avistamiento = require('../models/avistamiento');
const Barrera1 = require('../models/barrera1');
const Barrera2 = require('../models/barrera2');
const Barrera3 = require('../models/barrera3');
const Barrera4 = require('../models/barrera4');
const Barreraluz = require('../models/barreraluz');
const Barreraluz2 = require('../models/barreraluz2');
const Barreraluz3 = require('../models/barreraluz3');
const Barreraluz4 = require('../models/barreraluz4');
const Barreraluz5 = require('../models/barreraluz5');


exports.objeto_post = (req, res) => {

  const Model = req.Model;
  var body = req.body;
  
  if (body instanceof Array) {
    let objeto = body.map(objetoBody => {
      objetoBody._id = new mongoose.Types.ObjectId();  
      return objetoBody;
    });

    Model.insertMany(objeto)
    .then(result => {
      return res.status(200).send(result);
    })
    .catch(error => {
      return res.status(400).send(error);
    });
  }
  else {
    body._id = new mongoose.Types.ObjectId();   
    var objeto = new Model(body); 
    objeto.save()
      .then(result => {  
        res.status(200).send(result);
      })
      .catch(err => {
        return res.status(400).send({ error: err });
      });
  }
};
