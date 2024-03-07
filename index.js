const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const rfs = require("rotating-file-stream");

const app = express();

const usuarioRouters = require('./api/routes/usuario');
const objetosRouters = require('./api/routes/objetos');

const uri = 'mongodb://localhost:27017/bioclean';
const options = {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then( () => { console.log('Conectado a DB') }, err => { console.log(err) } );

//middlewares
// MORGAN SETUP
// create a log stream
const rfsStream = rfs.createStream("log.txt", {
  size: '10M', // rotate every 10 MegaBytes written
  interval: '7d', // rotate daily
  compress: 'gzip' // compress rotated files
})

// add log stream to morgan to save logs in file
app.use(morgan("dev", {
  stream: rfsStream
}));

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