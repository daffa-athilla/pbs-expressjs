//request library mysql
const mysql = require('mysql')


//variabel koneksi untuk database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'database_beasiswa'
})

//kirimkan variable keluar untuk digunakan dliuar file
module.exports = db
