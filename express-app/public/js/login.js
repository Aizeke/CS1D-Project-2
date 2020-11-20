import { app } from 'electron'
import { urlencoded, json } from 'express'

app.use(urlencoded({ extended: true }))
app.use(json())

/* eslint-disable no-undef */
$(document).on('ready', function () {
  $('#login-btn').click(function () {
    const user = $('#username').val().trim()
    const pass = $('#password').val().trim()

    console.log(user, pass)

    if (user.toLowerCase() === 'admin' && pass.toLowerCase() === 'password') {
      app.get('/admin', function (req, res) {})
    } else {
      console.log('wrong password')
    }
  })
})
