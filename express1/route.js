const express = require('express');
var router =express.Router();

router.get('/', function(req,res) {
	res.send('get Router');
});

router.post('/', function(req,res){
	res.send('post router');
});

module.exports = router;
