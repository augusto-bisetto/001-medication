const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const Allergy = mongoose.model('allergies')


const router = express.Router()


router.get('/allergies', async (req,res) => {
  console.log(req.session.user)
  if (  !req.session.user){
    return res.redirect("/")
  }

  const allergies = await Allergy.find({
    patient: req.session.user._id
  }).lean()
  res.render('allergies', {allergies})
})

router.post('/allergies', async (req,res) => {
  if (  !req.session.user){
    return res.redirect("/")
  }
  const allergy = await Allergy.create({...req.body, patient: req.session.user._id})
  res.redirect('/allergies')
})
module.exports = router;
