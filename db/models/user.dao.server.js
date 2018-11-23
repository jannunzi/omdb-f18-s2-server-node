const userSchema = require('./user.schema.server')
const mongoose = require('mongoose')
const userModel = mongoose.model('UserModel', userSchema)

findAllUsers = () =>
  userModel.find()

module.exports = {
  findAllUsers
}