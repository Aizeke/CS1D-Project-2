var mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  password: 'root',
  user: 'root',
  database: 'electron_db',
  host: 'localhost',
  port: '3306'
})

const db = {}

db.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM electron_db.nfldistances', (err, results) => {
      if (err) return reject(err)

      return resolve(results)
    })
  })
}

db.search = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM electron_db.nfldistances WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err)

      return resolve(results[0])
    })
  })
}

// Insert

// Update

// Delete

module.exports = db
