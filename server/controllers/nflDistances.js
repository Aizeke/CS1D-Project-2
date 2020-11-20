const connection = require('../config/connection.js')

const db = {}

// ===================================================
// Search all function for getting all data;
// ===================================================

/**
 * Creates a query to Select everything from NFL Distances database.
 */
db.allDistances = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nfldistances', (err, results) => {
      if (err) return reject(err)
      console.log(results)
      return resolve(results)
    })
  })
}

// ===================================================
// Search functions for NFL Distances Db;
// ===================================================

db.searchDistance = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nfldistances WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err)

      return resolve(results[0])
    })
  })
}

// ===================================================
// Insert functions for NFL Distances Db;
// ===================================================

// ===================================================
// Update functions for NFL Distances Db;
// ===================================================

// ===================================================
// Delete functions for NFL Distances Db;
// ===================================================

module.exports = db
