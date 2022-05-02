const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
  user: String,
  content: String,
  time: String,
  message: Date,
})


mongoose.model('chat', chatSchema)