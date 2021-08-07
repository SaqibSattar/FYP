const mongoose = require('mongoose');

const dateSchema = mongoose.Schema({
  date: { type: String, required: true },
});

module.exports = mongoose.model('date', dateSchema);
