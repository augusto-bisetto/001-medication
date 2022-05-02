const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    profileImage: String, 
    name: String, 
    surname: String, 
    Age: String, 

})


mongoose.model('patient', patientSchema)