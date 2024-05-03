//request library mysql
const mysql = require('mysql')


//variabel koneksi untuk database
const db = mysql.createConnection({
    host:'sql6.freesqldatabase.com',
    user:'sql6703776',
    password:'seVnyqb3DZ',
    database:'sql6703776'
})

//kirimkan variable keluar untuk digunakan dliuar file
module.exports = db
