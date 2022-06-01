const mongoose = require('mongoose')

const Prescriptions = new mongoose.Schema({
  Medication: String,
  Suggestions: String,
})


mongoose.model('Prescriptions', appointSchema)