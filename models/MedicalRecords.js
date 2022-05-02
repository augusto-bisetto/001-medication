const mongoose = require('mongoose')

const MedicalRecordsSchema = new mongoose.Schema({
    Vaccinations: String, 
    Documents: String, 
    User: String, 
    Date: Date, 

})


mongoose.model('medicalrecords', MedicalRecordsSchema)