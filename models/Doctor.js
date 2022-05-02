const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
  profileImage: {
    type: String,
    // default: 'https://'
  },
  name: String,
  surname: String,
  role: String
 
})


mongoose.model('doctor', doctorSchema)