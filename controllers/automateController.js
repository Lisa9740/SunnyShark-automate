let Automates = require('../models/AutomateModel');
let Marques = require('../models/marqueModel');
let TypeAutomates = require('../models/typeAutomateModel');


// CLASS QUI PERMET D'APPLIQUER DES FONCTIONS "CRUD" A TRAVERS DES ROUTES SITUÉ DANS ../ROUTES/INDEX
class Automate {

    listAutomate(req, res){
        Automates.find({}).
        populate('id_marques').
        populate('id_types').
        exec(function (err, result) {
            if(!err){
                res.render('../views/index',{
                    message: 'bonsoir je test un truc en node js',
                    automates: result
                })
            }else{
                console.log("erreur lors de la récupération de données =>",err);
            }
        });
    }

    saveAutomate(req, res){
        let automate = new Automates(req.body);
        automate.save(function (err) {
            console.log('dans la fonction save');
            if(!err){
                res.redirect('/')
            }else{
                console.log('erreur lors de l\'ajout', err);
                res.redirect('/');
            }
        })
    }
    createAutomate(req, res){
        res.render('../views/automates/createAutomate',{
            title: 'ajout automate'
        })
    }

    createMarque(req, res){
        res.render('../views/automates/marqueAutomate',{
            title: 'Création d\'une marque',
        })
    }

    saveMarque(req, res){
        let marque = new Marques(req.body);
        marque.save(function (err) {
            if(!err){
                res.redirect('/')
            }else{
                res.redirect('/')
            }
        })
    }

    createType(req, res){
        res.render('../views/automates/typeAutomate',{
            title: 'Créatin d\'un type'
        })
    }

    saveType(req, res){
        let type = new TypeAutomates(req.body);
        type.save(function (err) {
            if(!err){
                res.redirect('/')
            }else{
                res.redirect('/automate/createTypes')
            }
        })
    }
    selectTypes (req, res){
        TypeAutomates.find({}).exec(function (err, result) {
            if(!err){
                res.render('../views/selectType',{
                    types: result
                })
            }
        });
    }
    selectMarques (req,res){
        Marques.find({}).exec(function (err, result) {
            if(!err){
                res.render('../views/selectMarque',{
                    marques: result
                })
            }
        });
    }

    editAutomates (req, res){
      let update = {
          id_marques: req.body.selectMarques,
          id_types: req.body.selectTypes,
          date_service: req.body.date_service,
          serial: req.body.serial,
          configuration: req.body.configuration,
      };
      let id = req.body._id;
      Automates.findByIdAndUpdate(id, update, function (err) {
          if(!err){
              res.redirect('/');
          }else{
              console.log("erreur lors de la mise a jour =>", err);
              res.redirect('/');
          }
      })
    }

    deleteAutomates (req, res) {
        let id=req.params.id;
          Automates.remove({_id:id},function(err) {
            if(err) {
              console.log(err)
              res.redirect("/");
            }
            else {
              console.log("Automate deleted!");
              res.redirect("/");
            }
          });
        };
}

module.exports = Automate;