const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud-postgres',
  password: 'Rahasia12345',
  port: 5432,
})

module.exports = pool 