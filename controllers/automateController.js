var Automate = require("../models/AutomateModel");

var automateController = {};

//Fonction qui liste les automates
automateController.list = function(req, res) {
    Automate.find({}).exec(function (err, automates) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/index", {automates: automates});
      }
    });
  };

 // Montre un automate en fonction de son id
 automateController.show = function(req, res) {
    Automate.findOne({_id: req.params.id}).exec(function (err, automates) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/show", {automates: automates});
      }
    });
  };

//fonction qui redirige vers la page create
  automateController.create = function(req, res) {
    res.render("../views/create");
  };

//fonction qui sauvegarde la nouvelle donnée dans la bdd
  automateController.save = function(req, res) {
    var automate = new Automate(req.body);
  
    automate.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/create");
      } else {
        console.log("Successfully created an employee.");
        res.redirect("/");
      }
    });
  };

  //Add edit automates by id function, it just redirects to edit page.
  automateController.edit = function(req, res) {
    Automate.findOne({_id: req.params.id}).exec(function (err, automates) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/edit/_id", {automates: automates});
      }
    });
  };

  //Modifie les entrées dans la base de donnée

    automateController.update = function(req, res) {
      // recuperation des tous les champs du formulaire à editer
      var id=req.body.idAutomate;
      var marque = req.body.marque;
      var modele = req.body.modele;
      var date_service = req.body.date_service;
      var lieu = req.body.lieu;
      var bassin = req.body.bassin;
      var numeroserie = req.body.numeroserie;
      

  Automate.findByIdAndUpdate(id, { 
    $set: { 
      marque:marque, 
      modele:modele,
      date_service:date_service, 
      lieu:lieu, 
      bassin: bassin,  
      numeroserie:numeroserie }
    }, function (err) {
    if (!err) {
      res.redirect("/");
    }else{
      res.redirect("/error")
    }
    
  })
    };
//Supprime les entrées de la bdd par rapport à son id
automateController.delete = function(req, res) {
  var id=req.params.id;
    Automate.remove({_id:id},function(err) {
      if(err) {
        console.log(err)
      }
      else {
        console.log("Automate deleted!");
        res.redirect("/");
      }
    });
  };





module.exports = automateController;