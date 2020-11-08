
const express = require('express')
const apiRouter = require('path').join(__dirname, 'routes')

require('fs').readdirSync(apiRouter).forEach(function (file) {
  require('./routes/' + file)
})

const app = express()

app.use(express.json())

/**
 * Require all the routes
 */
app.use('/api/', apiRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 3000}`)
})
