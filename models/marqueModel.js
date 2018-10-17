let mongoose = require('mongoose');

let MarquesSchema = new mongoose.Schema({
    nom: {type:String},
});

module.exports = mongoose.model('Marques', MarquesSchema);