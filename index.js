const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app =  express()



app.set('view engine','ejs')

const mongoDbURI = 'mongodb+srv://test:test@cluster0.1vosb.mongodb.net/blogdatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDbURI)

require('./models/Doctor')

// app.use(require('./routes/'))

// const frontendRoutes = require('./routes/')


app.listen(3000)