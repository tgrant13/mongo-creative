var mongoose = require('mongoose');
var TotalSchema = new mongoose.Schema({
  title: String,
  total: {type: Number, default: 0},
  balance: {type: Number, default: 0},
  percentage: {type: Number, default: 0},
  add: {type: Number, default: 0}
});

TotalSchema.methods.updateBalance = function(cb) {

	this.balance += this.add;
	console.log(this.add);
	console.log(this.balance);
	this.save(cb);
}

mongoose.model('Total', TotalSchema);