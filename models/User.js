const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Users: String, 
    Data: String, 
    Password: String, 
    Email: String, 

}) 

mongoose.model('user', userSchema)




