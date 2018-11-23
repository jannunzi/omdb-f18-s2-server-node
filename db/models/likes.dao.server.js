const mongoose = require('mongoose')
const likesSchema = require('./likes.schema.server')
const likesModel = mongoose.model('LikesModel', likesSchema)

likes = (userId, movieId) =>
  likesModel.create({
    user: userId,
    movie: movieId
  })

findAllLikesForMovie = imdbID =>
  likesModel
    .find({movie: imdbID})
    .populate('user')
    .exec()

findAllLikesForUser = userId =>
  likesModel
    .find({user: userId})
    .populate('user')
    .exec()

module.exports = {
  likes,
  findAllLikesForMovie,
  findAllLikesForUser
}