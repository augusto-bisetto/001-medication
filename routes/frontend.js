const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const Appointment = mongoose.model('appointments')


const router = express.Router()


router.get('/', async (req,res) => {
  
  const user = req.session.user
  const doctors = await User.find({
    type:'doctor'
  }).lean()
  res.render('homepage', {
    user:user,
    doctors
  })
})

router.get('/sign-out', async (req,res) => {
  req.session.user = null
  res.redirect('/')
})

router.get('/sign-in', async (req,res) => {
  if (req.session.user){
    res.redirect('/homepage')
  } else {
    res.render('sign-in', {
      message: ''
    })
  }
})


router.post('/sign-in', async (req,res) => {
  const newUser = await User.findOne({
    email : req.body.email,
    password : req.body.password,
  })
  if (newUser){
    req.session.user = newUser    
    res.redirect('/')
  }else {
    res.render('sign-in', {
      message: 'Wrong credential'
    })
  }
})

router.post('/sign-up', async (req,res) => {
  console.log(req.body)
  const newUser = await User.create(req.body)
  req.session.user = newUser
  res.redirect('/')
})

router.get('/sign-up', (req,res) => {
  res.render('sign-up', {})
})

router.get('/sign-up/:id', () => {
  
})

router.post('/appointments', async (req,res) => {
  if (!req.session.user){
    return res.redirect('/')
  }
  await Appointment.create({
    ...req.body,
    patient: req.session.user._id
  })
  res.redirect('/appointments')  
})

router.get('/appointments', async (req,res) => {
  // if (req.session.user){
    if (!req.session.user){
      return res.redirect('/')
    }
    const appointments = await Appointment.find({
      patient: req.session.user._id
    }).lean()
    const doctors = await User.find({
      type:'doctor'
    }).lean()

    res.render('appointments', {
      user: req.session.user,
      doctors,
      appointments
    })
})

router.get('/appointments/:id', () => {
  
})




module.exports = router;