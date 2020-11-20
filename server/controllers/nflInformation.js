const connection = require('../config/connection.js')

const db = {}

// ===================================================
// Search all functions for getting all data;
// ===================================================

/**
 * Creates a query to Select everything from NFL Information database.
 */
db.allInformation = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nflinformation', (err, results) => {
      if (err) return reject(err)
      console.log(results)
      return resolve(results)
      /// results[0]."param"
    })
  })
}

// ===================================================
// Search functions for NFL Information Db;
// ===================================================

/**
 *
 * @param {*} id
 */
db.searchInformation = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nflinformation WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err)

      return resolve(results[0])
    })
  })
}

// ===================================================
// Insert functions for NFL Information Db;
// ===================================================

// ===================================================
// Update functions for NFL Information Db;
// ===================================================

// ===================================================
// Delete functions for NFL Information Db;
// ===================================================

module.exports = db
