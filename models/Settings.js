const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({
  profile: String,
  notification: String,
  layout: String,
 
})


mongoose.model('settings', settingsSchema)