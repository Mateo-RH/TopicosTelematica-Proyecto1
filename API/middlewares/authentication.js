const jwt = require('jsonwebtoken');
const keys = require('../config/dev');

let verificaToken = (req, res, next) => {
  let token = req.get('token');

  jwt.verify(token, keys.JWTSeed, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        err
      });
    }

    req.usuario = decoded.User;
    next();
  });
};

module.exports = {
  verificaToken
};
