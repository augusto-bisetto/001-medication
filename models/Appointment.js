const mongoose = require('mongoose')

const appointSchema = new mongoose.Schema({
  title: String,
  start: Date,
  allDay: Boolean,
  start: Date,
  end: Date,
  url: String,
})


mongoose.model('appointments', appointSchema)