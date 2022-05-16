const mongoose = require('mongoose')

const medicalrecordsSchema = new mongoose.Schema({
    surgeries: String, 
    allergies: String, 
    medication: String, 
    vaccinates: String, 

})


mongoose.model('medicalrecords', medicalrecordsSchema)