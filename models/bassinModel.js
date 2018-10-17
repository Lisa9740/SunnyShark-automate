const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let bassinsSchema = Schema({
 
    nom: String,
    id_type: [{type: Schema.Types.ObjectId, ref:'Types_bassins'}],
    id_automate: [{type: Schema.Types.ObjectId, ref:'automate'}],
    id_site:[{type: Schema.Types.ObjectId, ref:'sites'}]
});




let bassins = mongoose.model('Bassins', bassinsSchema);

module.exports= bassins;