var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'electron_db'
})

connection.connect((err) => {
  if (err) return console.log(err.stack)

  console.log('Connection To mySQL Success')
})

const selectAll = function () {
  connection.query('SELECT * FROM electron_db.nfldistances', function (err, result, fields) {
    if (err) throw err

    result.forEach(element => {
      console.log(element.distance + '\t' + element.beginningstadium)
    })
  })
}

selectAll()

connection.end(() => {
  console.log('Connection Closed')
})
