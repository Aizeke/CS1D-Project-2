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

db.insert = (confrence, division, stadiumname, seatingcapacity, surfacetype, teamname, stadiumrooftype, location, dateopend) => {
  connection.query('INERT INTO electron_db.nflinformation (confrence, division, stadiumname, seatingcapacity, surfacetype, teamname, stadiumrooftype, location, dateopend) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [confrence, division, stadiumname, seatingcapacity, surfacetype, teamname, stadiumrooftype, location, dateopend])
}

// ===================================================
// Update functions for NFL Information Db;
// ===================================================

db.update = (id, confrence, division, stadiumname, seatingcapacity, surfacetype, teamname, stadiumrooftype, location, dateopend) => {
  connection.query('UPDATE electron_db.nflinformation SET conference = ? OR division = ? OR stadiumname = ? OR seatingcapacity = ? OR surfacetype = ? OR teamname  = ? OR stadiumrooftype  = ? OR location  = ? OR dateopened WHERE id = ?',
    [confrence, division, stadiumname, seatingcapacity, surfacetype, teamname, stadiumrooftype, location, dateopend, id])
}

// ===================================================
// Delete functions for NFL Information Db;
// ===================================================

db.delete = (id) => {
  connection.query('DELETE FROM electron_db.nflinformation WHERE id = ?', [id])
}

module.exports = db
