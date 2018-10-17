var express = require('express');
var router = express.Router();

var bassinController = require("../controllers/bassinController.js");

let bassins = new bassinController;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/saveBassins', bassins.saveBassin);

router.post('/saveTypeBassins', bassins.saveTypeBassin);

router.post('/saveSites', bassins.saveSite);

router.post('/saveVille', bassins.saveVilles);

router.post('/selectBassins', bassins.selectBassin);

router.post('/selectSites', bassins.selectSite);


router.post('/editBassins', bassins.editBassin);

router.post('/editSites', bassins.editSite);

module.exports = router;
