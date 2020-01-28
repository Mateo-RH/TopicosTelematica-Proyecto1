const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// require('./models/User');
// require('./models/Temperature');

// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());

// require('./routes/authRoutes')(app);
// require('./routes/temperatureRoutes')(app);

app.listen(keys.puerto, () => {
  console.log(`Listening on port`, keys.puerto);
});
