const mongoose = require('mongoose')

const PathologyResult = new mongoose.Schema({
  typology: String,
  result: String,
})


mongoose.model('PatholgyResult', appointSchema)