var express = require('express');
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');

  dbAbstractionLayer.employeesCollection().then(response => {
    res.json(response);
     console.log(response);
  }).catch(error => {
    res.status(500).json({});
  });
});
module.exports = router;
