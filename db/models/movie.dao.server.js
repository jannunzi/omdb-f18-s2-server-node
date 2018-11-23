const mongoose = require('mongoose')
const movieSchema = require('./movie.schema.server')
const movieModel = mongoose.model('MovieModel', movieSchema)

createMovie = movie =>
  movieModel.create(movie)

module.exports = {
  createMovie
}