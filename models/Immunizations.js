const mongoose = require('mongoose')

const immunizationsSchema = new mongoose.Schema({
  name: String,
  description: String ,
  dayDone: String,
  dayExpire: String,
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})


mongoose.model('immunizations', immunizationsSchema)