const express = require('express');
const mongoose = require('mongoose');
const app = express();

const usuarioRouters = require('./api/routes/usuario');
const objetosRouters = require('./api/routes/objetos');

const uri = 'mongodb://localhost:27017/bioclean';
const options = {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then( () => { console.log('Conectado a DB') }, err => { console.log(err) } );

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    next();
});

//Routers
app.use('/Login', usuarioRouters); 
app.use('/:objetos', objetosRouters);

app.listen(3002);