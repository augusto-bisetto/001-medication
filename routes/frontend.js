const express = require('express')
const mongoose = require('mongoose')

const Doctor = mongoose.model('doctor')

const router = express.Router()


router.get('/', async (req,res) => {
  
  const doctor = await Doctor.find().lean()
  console.log(doctor)
  res.render('homepage', {
    doctor:doctor
  })
})

router.post('/appointments', async (req,res) => {
  await Doctor.create(req.body)
  res.render('appointments', {})
})

router.get('/appointments', (req,res) => {
  res.render('appointments', {})
})

router.get('/appointments/:id', () => {
  
})


router.post('/medicalID', async (req,res) => {
  await Doctor.create(req.body)
  res.render('medicalID', {})
})

router.get('/medicalID', (req,res) => {
  res.render('medicalID', {})
})

router.get('/medicalID/:id', () => {
  
})

module.exports = router;