const { verificaToken } = require('../middlewares/authentication');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = app => {
  app.post('/api/user', (req, res) => {
    let body = req.body;

    let user = new User({
      username: body.username,
      password: bcrypt.hashSync(body.password, 10)
    });

    user.save((err, userDB) => {
      if (err) {
        return res.status(500).json({
          error: true,
          mensaje: err
        });
      }

      res.json({
        error: false,
        user: userDB
      });
    });
  });

  app.put('/api/ubicacion', verificaToken, (req, res) => {
    let body = req.body;
    const coordenadas = `lat=${body.lat},long=${body.lng}`;
    const id = req.usuario._id;

    User.findById(id, (err, userDB) => {
      if (err) {
        return res.status(500).json({
          error: true,
          err
        });
      }

      if (!userDB) {
        return res.status(400).json({
          error: true,
          err: {
            message: 'Usuario no existe'
          }
        });
      }

      userDB.coords.push(coordenadas);

      userDB.save((err, userActualizado) => {
        res.json({
          error: false,
          user: userActualizado
        });
      });
    });
  });

  app.get('/api/user/', verificaToken, (req, res) => {
    const id = req.usuario._id;

    User.findById(id, (err, userDB) => {
      if (err) {
        return res.status(500).json({
          error: true,
          err
        });
      }

      if (!userDB) {
        return res.status(400).json({
          error: true,
          err: {
            message: 'Usuario no existe'
          }
        });
      }

      res.json({
        error: false,
        coords: userDB.coords
      });
    });
  });
};
