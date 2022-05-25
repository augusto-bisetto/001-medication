const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('user')


const router = express.Router()


router.get('/', async (req,res) => {
  
  const user = req.session.user
  res.render('homepage', {
    user:user
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




module.exports = router;