const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  city: { type: String, required: true },
  experience: { type: String, required: true }

});

module.exports = mongoose.model('serviceProvider', serviceSchema);
