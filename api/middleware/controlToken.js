const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

  if (!req.header('Authorization')) {
    return res.status(403).json({
      error: 'Falta de autorización en la solicitud HTTP.'
    });
  }

  const token = req.header('Authorization').split(' ')[1];

  try {

    jwt.verify(token, 'biocleancba2021#', (error, object) => {
      if (error) {
        return res.status(403).json({
          error: 'No autorizado'
        });
      } else {
        req.account = object.userId;
        next();
      }
    });
    
  } catch (error) {
    return res.status(403).json({
      error: 'No autorizado'
    });
  }
};
