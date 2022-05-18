const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String, 
    surname: String, 
    password: String, 
    email: String, 
    type: String,

}) 

mongoose.model('user', userSchema)




