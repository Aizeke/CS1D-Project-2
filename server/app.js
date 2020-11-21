const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const distancesRoute = require('./routes/distancesRoute.js')
const informationRoute = require('./routes/informationRoute.js')

const app = express()

// view engine setup
app.set('pages', path.join(__dirname, 'pages'))
app.set('view engine', 'html')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/**
 * Require all the routes
 */
app.use('/distance', distancesRoute)
// use distancesRoute to handle endpoints with
// the start using /distance

app.use('/information', informationRoute)
// use distancesRoute to handle endpoints with
// the start using /information

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/pages/login.html'))
})
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/adminpage.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
