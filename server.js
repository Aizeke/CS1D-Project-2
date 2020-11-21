
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const distancesRoute = require('./server/routes/distancesRoute.js')
const informationRoute = require('./server/routes/informationRoute.js')

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './assets/pages/login.html'))
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/adminpage.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port: ${process.env.PORT || 3000}`)
})
