const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({
  profile: String,
  username: String,
  email: String,
 
})


mongoose.model('settings', settingsSchema)