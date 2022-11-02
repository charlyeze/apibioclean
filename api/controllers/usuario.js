const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

exports.login = (req, res, next) => { 
    const username = req.body.username;
    const pass = req.body.password;
    const find = {'username':username, 'password': pass};
    const query = Usuario.findOne(find);

    query.exec( (err, usuario) => {
        if (err) {
            return res.status(401).json({ error: 'Autenticación no válida.' });
        }
        if (usuario) {
            let userInfo = usuario.toObject();
            const token = jwt.sign({
              usuario: usuario.username,
              userId: usuario._id
            },
            'biocleancba2021#',
            {
              expiresIn: "365d"
            });
            userInfo.token = token;

            res.status(200).json(userInfo);
        }
        else {
            return res.status(401).json({ error: 'Autenticación no válida.' });
        }
    });

};