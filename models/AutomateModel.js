var mongoose = require('mongoose');

var AutomateSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    date_service: String,
    lieu: String,
    bassin: String,
    numeroserie: { type: String, index: { unique: true }}
  });

  module.exports = mongoose.model('Automate', AutomateSchema);