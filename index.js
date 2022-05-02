const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const bodyParser = require('body-parser');

const app =  express()

app.use(express.static('public'))
app.use(session({
    secret:'sdfghjuk',
    name:'123er',
    saveUnitialized: false

}))

app.set('view engine','ejs')

const mongoDbURI = 'mongodb+srv://test:test@cluster0.1vosb.mongodb.net/blogdatabase?retryWrites=true&w=majority'
mongoose.connect(mongoDbURI)

require('./models/Doctor')
require('./models/Patient')

 app.use(require('./routes/frontend'))

const frontendRoutes = require('./routes/frontend')


app.listen(3000)