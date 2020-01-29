module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/proyecto1',
  puerto: 5000,
  JWTSeed: 'dev-seed',
  JWTCaducidad: '2h'
};
