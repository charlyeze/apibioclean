const express = require('express');
// const helmet = require("helmet");
const app = express();
const usuarioRouters = require('./api/routes/usuario');

//middlewares
// app.use(helmet());
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

app.listen(3002);