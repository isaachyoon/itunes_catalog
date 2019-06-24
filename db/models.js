var mongoose = require('mongoose');

var favoriteSchema = new mongoose.Schema({
  id: Number,
  name: String,
  artwork: String,
  genre: String,
  url: String,
  date: { type: Date, default: Date.now }
});

var favorite = mongoose.model('favorite', favoriteSchema);
module.exports = favorite;
