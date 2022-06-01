const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')

const router = express.Router()



router.post('/surgeries', async (req,res) => {
    await Doctor.create(req.body)
    res.render('surgeries', {})
  })
  
  router.get('/surgeries', (req,res) => {
    res.render('surgeries', {})
  })
  
  router.get('/surgeries/:id', () => {
    
  })
  
  
  router.get('/allergies/:id', () => {
    
  })

  router.post('/immunizations', async (req,res) => {
    await Doctor.create(req.body)
    res.render('immunizations', {})
  })
  
  router.get('/immunizations', (req,res) => {
    res.render('immunizations', {})
  })
  
  router.get('/immunizations/:id', () => {
    
  })

  router.post('/vaccinates', async (req,res) => {
    await Doctor.create(req.body)
    res.render('vaccinates', {})
  })
  
  router.get('/vaccinates', (req,res) => {
    res.render('vaccinates', {})
  })
  
  router.get('/vaccinates/:id', () => {
    
  })

module.exports = router;