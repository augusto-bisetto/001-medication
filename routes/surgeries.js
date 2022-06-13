const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')
const Surgery = mongoose.model('surgeries')


const router = express.Router()


router.get('/surgeries', async (req,res) => {
  console.log(req.session.user)
  if (  !req.session.user){
    return res.redirect("/")
  }

  const surgeries = await Surgery.find({
    patient: req.session.user._id
  }).lean()
  res.render('surgeries', {surgeries})
})

router.post('/surgeries', async (req,res) => {
  if (  !req.session.user){
    return res.redirect("/")
  }
  const surgery = await Surgery.create({...req.body, patient: req.session.user._id})
  res.redirect('/surgeries')
})
module.exports = router;