const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
  dinner: String,
  weekday: {
    type: String,
    unique: true
  }
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;