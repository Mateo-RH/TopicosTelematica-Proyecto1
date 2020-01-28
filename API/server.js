const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/dev');

mongoose.connect(keys.mongoURI, (err, res) => {
  if (err) throw err;
  console.log('Base de datos ONLINE');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/login')(app);
require('./routes/userRoutes')(app);

app.listen(keys.puerto, () => {
  console.log(`Listening on port`, keys.puerto);
});
