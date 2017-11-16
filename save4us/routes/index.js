var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Total = mongoose.model('Total');

router.get('/totals', function(req, res, next) {
  Total.find(function(err, totals){
    if(err){ return next(err); }
    res.json(totals);
  });
});

router.post('/addGoal', function(req, res, next) {
	var total = new Total(req.body);
	total.save(function(err, total){
		if(err) {return next(err); }
		res.json(total);
	});
});

module.exports = router;
