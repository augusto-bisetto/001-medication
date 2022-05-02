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

router.get('/sign-out', async (req,res) => {
  req.session.user = null
  res.redirect('/homepage')
})

router.get('/sign-in', async (req,res) => {
  if (req.session.user){
    res.redirect('/homepage')
  } else {
    res.render('sign-in', {
    })
  }
})


router.post('/sign-in', async (req,res) => {
  const newUser = await Patient.findOne({
    email : req.body.email,
    password : req.body.password,
  })
  if (newUser){
    req.session.user = newUser    
  }else {
    res.render('sign-in', {
      message: 'Wrong credential'
    })
  }
})

router.post('/sign-up', async (req,res) => {
  const newUser = await Patient.create(req.body)
  req.session.user = newUser
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
  // if (req.session.user){
    res.render('appointments', {
      user: req.session.user
    })
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