const mongoose = require('mongoose')

const surgeriesSchema = new mongoose.Schema({
  name: String,
  description: String ,
  time: String,
  day: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})


mongoose.model('surgeries', surgeriesSchema)