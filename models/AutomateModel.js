var mongoose = require('mongoose');

var AutomateSchema = new mongoose.Schema({
    serial: {
      type: String,
       unique : true
      },
    date_service: {
      type: String
      },
    id_marques : {
        type: mongoose.Schema.ObjectId, 
        ref:'Marques'
      },
    id_types :{
        type: mongoose.Schema.ObjectId, 
        ref:'Types_automates'
      },
    configuration :  {
        type: JSON,
    }
   
  });





  module.exports =  mongoose.model('Automate', AutomateSchema);;