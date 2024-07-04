const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: '0.0.0.0',
    database: 'test_db',
    password: process.env['postgres_pass'],
    dialect: 'postgres',
    port: 5432
})

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error aquiering client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log('Connected to database!')
    })
})

module.exports = pool