const mongoose = require('mongoose')

const accountsSchema = new mongoose.Schema({
    Users: String, 
    Data: String, 
    Password: String, 
    Email: String, 

})


mongoose.model('accounts', accountsSchema)