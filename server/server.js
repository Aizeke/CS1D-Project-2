/*********************************************************
* .-.    .--.  .--. .-..-. .--. 
* : :   : ,. :: ,. :: `: :: .; :
* : :   : :: :: :: :: .` ::    :
* : :__ : :; :: :; :: :. :: :: :
* :___.'`.__.'`.__.':_;:_;:_;:_;
*
*********************************************************/

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const distancesRoute = require('./routes/distancesRoute.js')
const informationRoute = require('./routes/informationRoute.js')

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
  // handle root
})

app.listen(port, () => {
  console.log(`Server is running on port: ${process.env.PORT || 3000}`)
})
