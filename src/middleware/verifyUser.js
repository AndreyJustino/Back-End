var jwt = require('jsonwebtoken');
var config = require('../database/config');

function verifyUser(req, res, next) {
  var token = req.headers['process.env.DATABASE_URL'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'Nenhum token informado.' });
    
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Falha ao autenticar o token.' });
      
    
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyUser;