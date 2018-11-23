module.exports = function () {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/omdb-f18-s2');
}