const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema({
    time: String, 
    date: Date, 
    appointment: String, 
     })


mongoose.model('schedule', scheduleSchema)