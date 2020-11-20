const mysql = require('mysql')

let connection = mysql

connection = mysql.createPool({
  connectionLimit: 10,
  password: 'root',
  user: 'root',
  database: 'electron_db',
  host: 'localhost',
  port: '3306'
})

module.exports = connection
