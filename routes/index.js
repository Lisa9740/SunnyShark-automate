var express = require('express');
var router = express.Router();
var automateController = require("../controllers/automateController.js");


let automates = new automateController;


router.get('/', automates.listAutomate);

router.get('/createAutomates', automates.createAutomate);

router.get('/createMarques', automates.createMarque);

router.get('/createTypes', automates.createType);

router.get('/selectType', automates.selectTypes);

router.get('/selectMarque', automates.selectMarques);

router.post('/saveAutomates', automates.saveAutomate);

router.post('/saveMarques', automates.saveMarque);

router.post('/saveTypes', automates.saveType);

router.post('/editAutomate', automates.editAutomates);

router.post('/delete/:id', automates.deleteAutomates);

module.exports = router;
