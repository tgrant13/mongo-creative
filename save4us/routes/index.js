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

router.param('total', function(req, res, next, id) {
	var query = Total.findById(id);
	query.exec(function (err, total){
		if (err) { return next(err); }
		if (!total) { return next(new Error("can't find total")); }
		req.total = total;
		return next();
	});
});

router.delete('/totals/:total', function(req, res) {
	console.log("in Delete");
	req.total.remove();
	res.sendStatus(200);
});

router.put('/totals/:total/updateBalance', function(req, res, next) {
	req.total.updateBalance(function(err, total){
		if(err) { return next(err); }
		res.json(total);
	})
});

module.exports = router;
