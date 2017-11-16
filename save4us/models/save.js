var mongoose = require('mongoose');
var SaveSchema = new mongoose.Schema({
  title: String,
  goal: {type: Number, default: 0},
  balance: {type: Number, default: 0}
});
mongoose.model('Save', SaveSchema);