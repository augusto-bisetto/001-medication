const mongoose = require('mongoose')

const medicalrecordsSchema = new mongoose.Schema({
    Vaccinations: String, 
    Documents: String, 
    User: String, 
    Date: Date, 

})


mongoose.model('medicalrecords', medicalrecordsSchema)