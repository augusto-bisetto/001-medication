const mongoose = require('mongoose')

const appointSchema = new mongoose.Schema({
  allergiesName: String,
  quantity: Date,
  description: String ,
  symptoms: String,
  feeling: String,
})


mongoose.model('appointments', appointSchema)