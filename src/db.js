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
  conn.query("SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderdetail.ProductID, productheader.Name, productheader.PictureLink1, color.ColorName, size, Qty, orderheader.StatusID, Price FROM `orderdetail`, `color`, `orderheader`, `productheader` WHERE orderheader.OrderID = "+ id +" AND orderdetail.ProductID = productheader.ProductID AND orderdetail.ColorID = color.ColorID AND orderheader.OrderID = orderdetail.OrderID ", (err,rows)=>{
    res.json(rows)
  })
})

app.get('/productdetail/:id', (req, res)=>{
  var id = req.params.id
  conn.query("SELECT productdetail.ProductID, productheader.Name, productheader.Price, productheader.Description, productheader.PictureLink1, productdetail.Size, productdetail.Qty from productdetail, productheader WHERE productheader.ProductID = '" + id + "' AND productheader.ProductID = productdetail.ProductID", (err, rows)=>{
    res.json(rows)
  })
})

app.get('/getcolor/:id', (req, res)=>{
  var id = req.params.id
  conn.query("SELECT DISTINCT productdetail.ColorID, ColorName FROM productdetail, color WHERE ProductID = " + id + " AND productdetail.ColorID = color.ColorID",(err, rows)=>{
    res.json(rows)
  })
})

app.get('/getsize/:id', (req, res)=>{
  var id = req.params.id
  conn.query("SELECT DISTINCT Size FROM `productdetail` WHERE ProductID = '" + id + "'",(err, rows)=>{
    res.json(rows)
  })
})

app.post('/cart', (req, res)=>{
  var data = req.body
  conn.query("INSERT INTO cart VALUES (" + data.ProductID + ", '"+ data.Size + "', '"+ data.ColorID + "', 1) ON DUPLICATE KEY UPDATE Qty = Qty + 1 ", (err, result)=>{
      if(err) res.status(400).json(err)
      else res.json(result)
  })
})

app.get('/getcart', (req, res)=>{
  conn.query("SELECT *, productheader.Price*cart.Qty AS Subtotal FROM `cart`, `color`, `productheader` WHERE cart.ProductID = productheader.ProductID AND cart.ColorID = color.ColorID ",(err, rows)=>{
    res.json(rows)
  })
})

app.get('/getsubtotal', (req, res)=>{
  conn.query("SELECT SUM(productheader.Price*cart.Qty) FROM `cart`, `color`, `productheader` WHERE cart.ProductID = productheader.ProductID AND cart.ColorID = color.ColorID ",(err, rows)=>{
    res.json(rows)
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
