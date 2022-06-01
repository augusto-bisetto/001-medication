const mongoose = require('mongoose')

const appointSchema = new mongoose.Schema({
  description: String,
  start: Date,
  end: Date,
  url: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
})


mongoose.model('appointments', appointSchema)