let bassins = require('../models/bassinModel');
let Type_Bassins = require('../models/typeBassin');
let sites = require('../models/siteModel');
let villes = require('../models/villeModel');

class Bassins {

    listBassins(req, res){
        Bassins.find({}).
        populate('id_sites').
        populate('id_automate').
        populate('id_type').exec(function (err, result) {
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

    saveBassin(req, res){
        let Bassin = new bassins(req.body);
        Bassin.save(function (err) {
            console.log('dans la fonction save');
            if(!err){
                res.redirect('/')
            }else{
                console.log('erreur lors de l\'ajout', err);
                res.redirect('/');
            }
        })
    }
    createBassin(req, res){
        res.render('../views/index',{
            title: 'ajout automate'
        })
    }

    createTypeBassin(req, res){
        res.render('../',{
            title: 'Création d\'un bassin',
        })
    }

    saveTypeBassin(req, res){
        let Type_Bassin = new Type_Bassins(req.body);
       Type_Bassin.save(function (err) {
            if(!err){
                res.redirect('/')
            }else{
                res.redirect('/')
            }
        })
    }

    createSite(req, res){
        res.render('../views/automates/typeAutomate',{
            title: 'Créatin d\'un type'
        })
    }

    saveSite(req, res){
        let Site = new sites (req.body);
        Site.save(function (err) {
            if(!err){
                res.redirect('/')
            }else{
                res.redirect('/')
            }
        })
    }
    createVille(req, res){
        res.render('../',{
            title: 'Créatin d\'un type'
        })
    }

    saveVilles(req, res){
        let ville = new villes(req.body);
        ville.save(function (err) {
            if(!err){
                res.redirect('/')
            }else{
                res.redirect('/error')
            }
        })
    }
    selectSite (req, res){
        sites.find({}).exec(function (err, result) {
            if(!err){
                res.render('../views/selectSite',{
                    sites: result
                })
            }
        });
    }
    selectTypes (req,res){
        Type_Bassins.find({}).exec(function (err, result) {
            if(!err){
                res.render('../views/',{
                    marques: result
                })
            }
        });
    }
    selectBassin (req,res){
        bassins.find({}).exec(function (err, result) {
            if(!err){
                res.render('../views/selectBassin',{
                    bassins : result
                })
            }
        });
    }
    selectAutomate (req,res){
        Bassins.find({}).exec(function (err, result) {
            if(!err){
                res.render('../views/partials/selectAutomate',{
                    marques: result
                })
            }
        });
    }

    editBassin (req, res){
      let update = {
          id_site: req.body.selectSite,
          id_types: req.body.selectTypes,
          nom: req.body.nom,
          id_automate: req.body.selectAutomate,
      };
      let id = req.body._id;
      Bassins.findByIdAndUpdate(id, update, function (err) {
          if(!err){
              res.redirect('/');
          }else{
              console.log("erreur lors de la mise a jour =>", err);
              res.redirect('/');
          }
      })
    }


    editSite (req, res){
        let update = {
            nom: req.body.nom,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            id_bassin: req.body.selectBassin,
        };
        let id = req.body._id;
        Bassins.findByIdAndUpdate(id, update, function (err) {
            if(!err){
                res.redirect('/');
            }else{
                console.log("erreur lors de la mise a jour =>", err);
                res.redirect('/');
            }
        })
      }
}

module.exports = Bassins;