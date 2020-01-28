const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/dev');

module.exports = app => {
  app.post('/api/login', (req, res) => {
    let body = req.body;

    User.findOne({ username: body.username }, (err, userDB) => {
      if (err) {
        return res.status(500).json({
          error: true,
          mensaje: err
        });
      }

      if (
        !userDB ||
        !body.password ||
        !bcrypt.compareSync(body.password, userDB.password)
      ) {
        return res.status(400).json({
          error: true,
          mensaje: 'Usuario o contraseña incorrectos '
        });
      }

      let token = jwt.sign(
        {
          User: userDB
        },
        keys.JWTSeed,
        { expiresIn: keys.JWTCaducidad }
      );

      res.json({
        error: false,
        User: userDB,
        token
      });
    });
  });
};
