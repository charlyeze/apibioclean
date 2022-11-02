const mongoose = require('mongoose'); 

module.exports = (req, res, next) => {

  const rutaUrl = req.baseUrl.slice(1).split('/');
  if (rutaUrl.length > 0) {
    const objetoRuta = rutaUrl[0]; 
     try {
        let Model = mongoose.model(objetoRuta);
        req.Model = Model;
        next();
        return;
    }
    catch(exception) {
        res.status(404).send({error: "Ruta de objeto no válida '" + objetoRuta + "'."});
    } 
  }
};
