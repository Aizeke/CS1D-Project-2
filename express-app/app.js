
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const distancesRoute = require('./routes/distancesRoute.js')
const informationRoute = require('./routes/informationRoute.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

/**
 * Require all the routes
 */
app.use('/distance', distancesRoute)
// use distancesRoute to handle endpoints with
// the start using /distance

app.use('/information', informationRoute)
// use distancesRoute to handle endpoints with
// the start using /information

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/adminpage.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port: ${process.env.PORT || 3000}`)
})

module.exports = app
