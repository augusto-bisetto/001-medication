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

  router.post('/allergies', async (req,res) => {
    await Doctor.create(req.body)
    res.render('allergies', {})
  })
  
  router.get('/allergies', (req,res) => {
    res.render('allergies', {})
  })
  
  router.get('/allergies/:id', () => {
    
  })

  router.post('/medication', async (req,res) => {
    await Doctor.create(req.body)
    res.render('medication', {})
  })
  
  router.get('/medication', (req,res) => {
    res.render('medication', {})
  })
  
  router.get('/medication/:id', () => {
    
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