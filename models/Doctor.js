const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
  profileImage: String,
  name: String,
  surname: String,
  role: String
 
})


mongoose.model('doctor', doctorSchema)