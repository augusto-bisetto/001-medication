const mongoose = require('mongoose')

const allergiesSchema = new mongoose.Schema({
  name: String,
  description: String ,
  symptoms: String,
  feeling: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})


mongoose.model('allergies', allergiesSchema)