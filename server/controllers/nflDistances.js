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

db.insert = (distance, beginningstadium, teamname, endingstadium) => {
  connection.query('INERT INTO electron_db.nfldistances (distance, beginningstadium, teamname, endingstadium) VALUES (?, ?, ?, ?)',
    [distance, beginningstadium, teamname, endingstadium])
}

// ===================================================
// Update functions for NFL Distances Db;
// ===================================================

db.update = (id, distance, beginningstadium, teamname, endingstadium) => {
  connection.query('UPDATE electron_db.nfldistances SET distance = ? OR beginningstadium = ? OR teamname = ? OR endingstadium = ? WHERE id = ?',
    [distance, beginningstadium, teamname, endingstadium, id])
}

// ===================================================
// Delete functions for NFL Distances Db;
// ===================================================

db.delete = (id) => {
  connection.query('DELETE FROM electron_db.nfldistances WHERE id = ?', [id])
}

module.exports = db
