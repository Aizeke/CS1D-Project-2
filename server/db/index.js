var mysql = require('mysql')

const connection = require('../config/connection.js')

const db = {}

db.all = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nfldistances', (err, results) => {
      if (err) return reject(err)

      return resolve(results)
    })
  })
}
/**
 * This function will search for one nfl distance by using its id
 * as a parameter;
 * @param {number} id ID for nfl distance
 */
db.search = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nfldistances WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err)

      return resolve(results[0])
    })
  })
}

// Insert

// Update

// Delete

module.exports = db
