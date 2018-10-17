const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let types_bassinsSchema = Schema({

    nom: String,
});
let Type_bassins = mongoose.model('Type_bassins', types_bassinsSchema);
module.exports= Type_bassins;