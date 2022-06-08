const mongoose = require('mongoose')

const surgeriesSchema = new mongoose.Schema({
  name: String,
  description: String ,
  Time: String,
  Day: Date,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})


mongoose.model('surgeries', surgeriesSchema)