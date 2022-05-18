const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const session = require('express-session')

const app =  express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(session({
    secret: '33847fdnkjfh',
    resave: false,
    saveUninitialized: true
  }))
  
  
app.set('view engine','ejs')

const mongoDbURI = 'mongodb+srv://test:test@cluster0.1vosb.mongodb.net/blogdatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDbURI)

require('./models/User')


 app.use(require('./routes/frontend'))

const frontendRoutes = require('./routes/frontend')


app.listen(3000)