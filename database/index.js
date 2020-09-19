const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/dinnerplans';
const connection = mongoose.connect(mongoURI, { useNewUrlParser: true });

connection
  .then(connection => console.log(`Connected to: ${mongoURI}`))
  .catch(err => console.log(`There was a problem connecting to MongoDB at: ${mongoURI}`));

module.exports = connection;