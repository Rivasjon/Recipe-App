const express = require('express')
const router = express.Router()

// All Authors Route
router.get('/',(req, res) => {
  res.render('authors/index')
})

// New Authors Route
router.get('/new', (req,res) =>{
  res.render('authors/new')
})

//create author route
router.post('/',(req,res) => {
  res.send('create')
})

module.exports = router 