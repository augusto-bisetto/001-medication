const mongoose = require('mongoose')

const medicalrecordsSchema = new mongoose.Schema({
    surgeries: String, 
    allergies: String, 
    immunizations: String, 
    vaccinates: String, 

})


mongoose.model('medicalRecords', medicalrecordsSchema)