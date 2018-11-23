const mongoose = require('mongoose')
const likesSchema = mongoose.Schema({
  movie: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'likes'})
module.exports = likesSchema