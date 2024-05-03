//request library mysql
const mysql = require('mysql')


//variabel koneksi untuk database
const db = mysql.createConnection({
    host:'sql6.freesqldatabase.com',
    user:'sql6703776',
    password:'sql6703776',
    database:'seVnyqb3DZ'
})

//kirimkan variable keluar untuk digunakan dliuar file
module.exports = db
