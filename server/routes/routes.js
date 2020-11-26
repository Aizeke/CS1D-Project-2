const express = require('express')
const router = express.Router()

// GET home page.
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/admin', (req, res) => {
  res.render('admin')
})

router.get('/travel', (req, res) => {
  res.render('travel')
})

module.exports = router
