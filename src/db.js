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

app.post('/login/', (req, res)=>{
    var email = req.body.email;
    var pass = req.body.pass;

    conn.query("select * from account where email = '" + email + "' and password ='" + pass + "'", (err, row)=>{
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

// Show order header on Admin Dashboard
app.get('/admin', (req, res)=>{
    var query = "SELECT DISTINCT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID FROM orderheader INNER JOIN orderdetail on orderheader.OrderID = orderdetail.OrderID Order BY orderheader.OrderID DESC"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show Product List
app.get('/productheader', (req, res)=>{
    var query = "SELECT * FROM productheader"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show Category Desc if the Category input type is dropdown or option (currently it is text input type)

// app.get('/addproduct', (req, res)=>{
//     var query = "SELECT * FROM category"
//     conn.query(query, (err, result) =>{
//         if (err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// Insert new product
app.post('/addproduct', (req, res)=>{
    var data = req.body
    conn.query("INSERT INTO productheader SET ?", data, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Payment
app.get('/admin/order1', (req, res)=>{
    var query = "SELECT DISTINCT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderstatusdetail.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS PaymentDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderstatusdetail.StatusID = 1 OR orderstatusdetail.StatusID = 2 Order BY orderheader.OrderID"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Packing
app.get('/admin/order2', (req, res)=>{
    var query = "SELECT DISTINCT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS PaymentDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID Order BY orderheader.OrderID"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

app.listen(8000, ()=>{
    console.log('Server berjalan di port 8000')
})
