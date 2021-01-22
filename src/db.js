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

app.get('/', (req, res)=>{
  res.write('Hello World')
  res.end()
})

app.post('/login/', (req, res)=>{
  var email = req.body.email;
  var pass = req.body.pass;

  conn.query("select * from account where email = '" + email + "' and password ='" + pass + "'", (err, row)=>{
    if(row.length>0) res.json(row[0])
    else res.json({})
  })
})

app.get('/shop', (req, res)=>{
    conn.query("Select Description from category", (err, rows)=>{
        res.json(rows)
    })
})

app.post('/shop', (req, res)=>{
  conn.query("select ProductID, Name, Price, Description, PictureLink1 from productheader", (err, rows)=>{
      res.json(rows)
  })
})

app.get('/profil/order/', (req, res)=>{
  conn.query("select OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, StatusID, ShippingID, Total from orderheader", (err,rows)=>{
    res.json(rows)
  })
})

app.get('/orderdetail/:id', (req, res)=>{
  var id = req.params.id
  conn.query("SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderdetail.ProductID, productheader.Name, color.ColorName, size, Qty, orderheader.StatusID, Price FROM `orderdetail`, `color`, `orderheader`, `productheader` WHERE orderheader.OrderID = "+ id +" AND orderdetail.ProductID = productheader.ProductID AND orderdetail.ColorID = color.ColorID AND orderheader.OrderID = orderdetail.OrderID ", (err,rows)=>{
    res.json(rows)
  })
})

app.get('/productdetail/:id', (req, res)=>{
  var id = req.params.id
  conn.query("SELECT productdetail.ProductID, productheader.Name, productheader.Price, productheader.Description, productheader.PictureLink1, productdetail.ColorID, productdetail.Size, productdetail.Qty from productdetail, productheader WHERE productheader.ProductID = '" + id + "' AND productheader.ProductID = productdetail.ProductID", (err,rows)=>{
    res.json(rows)
  })
})

app.post('/pegawai', (req, res)=>{
    var data = req.body

    conn.query("INSERT INTO tbl_pegawai SET ?", data, (err, result)=>{
        if(err) res.status(400).json(err)
        else res.json(result)
    })
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

// Edit product
app.put('/editproduct/:productid', (req, res)=>{
    var Name = req.body.Name
    var Price = req.body.Price
    var CategoryID = req.body.CategoryID
    var Description = req.body.Description
    var PictureLink1 = req.body.PictureLink1
    var PictureLink2 = req.body.PictureLink2
    var PictureLink3 = req.body.PictureLink3
    var productid = req.params.productid 
    var query = "UPDATE productheader SET Name = '" + Name + "', Price = " + Price + ", CategoryID = " + CategoryID + ", Description = '" + Description + "' , PictureLink1 = '" + PictureLink1 + "', PictureLink2 = '" + PictureLink2 + "', PictureLink3 = '" + PictureLink3 + "' WHERE ProductID = " + productid

   
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Data to Edit Product List
app.get('/editproduct/:productid', (req, res)=>{
    var productid = req.params.productid 
    var query = "SELECT * FROM productheader WHERE ProductID = " + productid
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Delete Product --Belum Selesai Edit Isinya
app.delete('/editproduct/:productid', (req, res)=>{
    var productid = req.params.productid 
    var query = "DELETE FROM productheader WHERE ProductID = " + productid
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Payment
app.get('/admin/order1', (req, res)=>{
    var query = "SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderstatusdetail.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS PaymentDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderheader.StatusID = 1"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Packing
app.get('/admin/order2', (req, res)=>{
    var query = "SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS PaymentDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderheader.StatusID = 2"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Shipping
app.get('/admin/order3', (req, res)=>{
    var query = "SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS ShippingDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderheader.StatusID = 3 AND orderstatusdetail.StatusID = 3"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Delivered
app.get('/admin/order4', (req, res)=>{
    var query = "SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderstatusdetail.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS DeliveredDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderstatusdetail.StatusID = 4"
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
