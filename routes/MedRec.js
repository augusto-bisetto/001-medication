const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')

const router = express.Router()



  
  router.get('/surgeries/:id', () => {
    
  })
  
  
  router.get('/allergies/:id', () => {
    
  })

  
  router.get('/immunizations/:id', () => {
    
  })



module.exports = router;