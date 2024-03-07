const mongoose = require("mongoose");
const Cliente = require("../models/cliente");

const barreras = {
  Barrera1: "bar_1",
  Barrera2: "bar_2",
  Barrera3: "bar_3",
  Barrera4: "bar_4",
  Barreraluz: "bar_luz",
  Barreraluz2: "bar_luz2",
  Barreraluz3: "bar_luz3",
  Barreraluz4: "bar_luz4",
  Barreraluz5: "bar_luz5",
};

module.exports = (req, res, next) => {
  try {
    const Model = req.Model;

    let body = req.body;
    if (body instanceof Array) {
      let estaciones = [];
      let objetos = [];
      const count = body.length;
      Cliente.findById(body[0].id_cli, function (err, docs) {
        if (err) {
          next();
        }
        const cliente = docs;
        const dateRegister = body[0].fecha;
        const nameModel = Model["modelName"];
        const nameBarrera = barreras[nameModel];
        const countBarrera = cliente[nameBarrera];
        if (count < countBarrera) {
          const newRegister = {
            id_cli: cliente._id,
            fecha: dateRegister,
            nov_1: "S/N",
          };
          body.forEach((objeto) => estaciones.push(parseInt(objeto.n_bar)));
          for (var i = 1; i <= countBarrera; i++) {
            if(estaciones.findIndex(est => est === i) === -1){
              objetos.push({ ...newRegister, n_bar: i });
            }
          }
          const resultBody = objetos.concat(body);
          let hash = {};
          dataArr = resultBody.filter(o => hash[o.n_bar] ? false : hash[o.n_bar] = true);
          req.body = dataArr;
          next();
        } else {
          next();
        }
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({
      error: "Problemas al completar registros!!!",
    });
  }
};
