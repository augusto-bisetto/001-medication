const mongoose = require('mongoose')

const PathologyResult = new mongoose.Schema({
  PatientDetails: String,
  FullBloodCount: String,
  PreliminaryReport: String,
})


mongoose.model('PatholgyResult', appointSchema)