const express = require('express')
const mongoose = require('mongoose')

const Doctor = mongoose.model('doctor')
const Patient = mongoose.model('patient')

const router = express.Router()


router.get('/', async (req,res) => {
  
  const doctor = await Doctor.find().lean()
  console.log(doctor)
  res.render('homepage', {
    doctor:doctor
  })
})

router.post('/sign-up', async (req,res) => {
  await Patient.create(req.body)
  res.render('homepage', {})
})

router.get('/sign-up', (req,res) => {
  res.render('sign-up', {})
})

router.get('/sign-up/:id', () => {
  
})

router.post('/appointments', async (req,res) => {
    await Doctor.create(req.body)
    res.render('appointments', {})  
})

router.get('/appointments', (req,res) => {
  if (req.user){
    res.render('appointments', {})
  }else{
    res.redirect('/sign-up')
    
  }
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