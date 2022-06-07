const mongoose = require('mongoose')

const Prescriptions = new mongoose.Schema({
  Medication: String,
  DocComment: String,
})


mongoose.model('Prescriptions', appointSchema)