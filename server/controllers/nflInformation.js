const connection = require('../config/connection.js')

const db = {}

// ===================================================
// Search all functions for getting all data;
// ===================================================

/**
 * Creates a query to Select everything from NFL Information database.
 */
db.allFromInformation = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM electron_db.nflinformation', (err, results) => {
      if (err) return reject(err)

      return resolve(results)
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
