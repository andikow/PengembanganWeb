const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Allow Origin Access
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS')
    if(req.method == 'OPTIONS'){
        res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type, X-Requested-With, Authorization')
        return res.status(200).json({})
    }
    next()
})
// End Allow Origin Access

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

const mysql = require('mysql')

const conn = mysql.createConnection({
    host  : 'localhost',
    user : 'root',
    password : '',
    database : 'binco'
})

app.get('/shop', (req, res)=>{
    conn.query("select * from account", (err, rows)=>{
        res.json(rows)
    })
})

app.get('/login/:id', (req, res)=>{
    var id = req.params.id + '';

    conn.query("select password from account where email = '" + id + "'", (err, row)=>{
        if(row.length>0) res.json(row[0])
        else res.json({})
    })
})

app.post('/pegawai', (req, res)=>{
    var data = req.body

    conn.query("INSERT INTO tbl_pegawai SET ?", data, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
})

app.get('/', (req, res)=>{
    res.write('Hello World')
    res.end()
})

app.get('/home', (req, res)=>{
    res.write('Konten url Home')
    res.end()
})

app.post('/home', (req, res)=>{
    res.write('Konten url Home method POST')
    res.end()
})

app.listen(8000, ()=>{
    console.log('Server berjalan di port 8000')
})
