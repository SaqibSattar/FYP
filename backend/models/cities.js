const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  city: { type: String, required: true },
});

module.exports = mongoose.model('cities', citySchema);
