const express = require('express');
const app = express();
const port = 3002;

//pemanggilan request body parse
const bodyParser = require('body-parser')
//pemanggilan file config.js di index.js
const db = require('./config.js')

const response = require('./request.js')

//penggunaan body parse
app.use(bodyParser.json());

//tambahkan route get data
app.get('/mahasiswa', (req, res) => {
   const sql = 'SELECT * FROM tb_mahasiswa'
   db.query(sql, (error, result)=>{
       response(200,result,'data mahasiswa',res)
   })
})

app.get('/', (req, res) => {
    res.send("selamat datang di web API service")
 })

app.get('/mahasiswa/:npm',(req,res) => {
    const npm = req.params.npm
    const sql = `SELECT * FROM tb_mahasiswa where npm = '${npm}'`
    db.query(sql,(err, result)=>{
        if(err) throw err
        response(200,result,"get detail mahasiswa",res)
    })
})

app.post('/mahasiswa', (req, res) => {
    const {nama, npm, alamat } = req.body
    const sql = `INSERT INTO tb_mahasiswa (nama, npm, alamat) VALUES ('${nama}', '${npm}', '${alamat}');`

    db.query(sql, (error, fields)=>{
        if (error) response(500, 'invalid', `${nama},dengan npm ${npm} sudah di tambahkan`, res) 
        if(fields?.affectedRows){
            const data ={
                isSuccess: fields.affectedRows,
                id:fields.insertId,
            }
            response(200,data,"Data berhasil di simpan",res)
        }
    })
})



app.listen(port, () => {
    console.log(`Running in port ${port}`)
})