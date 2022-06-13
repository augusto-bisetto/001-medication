const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const Immunization = mongoose.model('immunizations')


const router = express.Router()


router.get('/immunizations', async (req,res) => {
  console.log(req.session.user)
  if (  !req.session.user){
    return res.redirect("/")
  }

  const immunizations = await Immunization.find({
    patient: req.session.user._id
  }).lean()
  res.render('immunizations', {immunizations})
})

router.post('/immunizations', async (req,res) => {
  if (  !req.session.user){
    return res.redirect("/")
  }
  const immunization = await Immunization.create({...req.body, patient: req.session.user._id})
  res.redirect('/immunizations')
})
module.exports = router;
