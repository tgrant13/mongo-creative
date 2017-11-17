var mongoose = require('mongoose');
var TotalSchema = new mongoose.Schema({
  title: String,
  total: {type: Number, default: 0},
  balance: {type: Number, default: 0},
  percentage: {type: String, default: 0},
  add: {type: Number, default: 0},
  color: {type: String, default: "red"}
});

TotalSchema.methods.updateBalance = function(cb) {
	this.balance += this.add;
	if(this.balance >= this.total)
	{
		this.color = "green";
	}
	this.save(cb);

}

mongoose.model('Total', TotalSchema);