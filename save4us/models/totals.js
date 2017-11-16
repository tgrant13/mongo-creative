var mongoose = require('mongoose');
var TotalSchema = new mongoose.Schema({
  title: String,
  total: {type: Number, default: 0},
  balance: {type: Number, default: 0}
});
mongoose.model('Total', TotalSchema);