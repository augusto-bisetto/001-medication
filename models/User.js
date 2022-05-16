const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String, 
    surname: String, 
    Password: String, 
    Email: String, 

}) 

mongoose.model('user', userSchema)




