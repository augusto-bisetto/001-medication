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

router.post('/doctor/create', async (req,res) => {
  await Doctor.create(req.body)
  res.render('new-doctor', {})
})

router.get('/doctor/create', (req,res) => {
  res.render('new-doctor', {})
})


router.get('/doctor/:id', () => {
  
})

module.exports = router;