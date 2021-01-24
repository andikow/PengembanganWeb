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
// const { default: Order } = require('./components/order1')

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
  conn.query("SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderdetail.ProductID, productheader.Name, productheader.PictureLink1, color.ColorName, size, Qty, orderheader.StatusID, Price, Subtotal, ShippingCosts, SalesTax, Total, FirstName, LastName, Address, Building, Country, ZipCode, City, ShippingMethod, Phone FROM `orderdetail`, `color`, `orderheader`, `productheader`, `shippingdetail` WHERE orderheader.OrderID = "+ id +" AND orderdetail.ProductID = productheader.ProductID AND orderdetail.ColorID = color.ColorID  AND orderheader.OrderID = orderdetail.OrderID AND orderheader.ShippingID = shippingdetail.ShippingID", (err,rows)=>{
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

//Get Admin Customers
app.get('/admintotalcustomers', (req, res)=>{
    var query="SELECT * FROM account"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

//Get Admin Products
app.get('/admintotalproducts', (req, res)=>{
    var query="SELECT * FROM productheader"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Total Revenue
app.get('/admintotalrevenue', (req, res)=>{
    var query="SELECT Total FROM orderheader"
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

// // Delete Product --Belum Selesai Edit Isinya
// app.delete('/editproduct/:productid', (req, res)=>{
//     var productid = req.params.productid
//     var query = "DELETE FROM productheader WHERE ProductID = " + productid
//     conn.query(query, (err, result) =>{
//         if (err)
//             res.json(err)
//         else
//             res.json(result)
//     })
// })

// Show Product Detail
app.get('/admin/productdetail/:productid', (req, res)=>{
    var productid = req.params.productid 
    var query = "SELECT ColorName, Size, Qty FROM productdetail INNER JOIN color ON productdetail.ColorID = color.ColorID WHERE productdetail.ProductID = " + productid
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Edit Product Detail
app.put('/admin/editproductdetail/:productid', (req, res)=>{
    var ColorID = req.body.ColorID
    var Size = req.body.Size
    var Qty = req.body.Qty
    var productid = req.params.productid 
    var query = "UPDATE productdetail SET Qty = " + Qty + " WHERE ProductID = " + productid + " AND ColorID ='" + ColorID + "' AND Size = '" + Size + "'"  
    console.log(query)
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Data to Edit Product Detail
app.get('/admin/editproductdetail/:productid', (req, res)=>{
    var productid = req.params.productid 
    var query = "SELECT * FROM productdetail WHERE ProductID = " + productid
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Insert new product
app.post('/admin/addproductdetail/:productid', (req, res)=>{
    var productid = req.params.productid
    var ColorID = req.body.ColorID
    var Size = req.body.Size
    var Qty = req.body.Qty
    var query = "INSERT INTO productdetail SET ProductID = " + productid + ", ColorID = '" + ColorID + "', Size = '" + Size + "', Qty = " + Qty
    console.log(query)
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show Color List
app.get('/admin/colorlist', (req, res)=>{
    var query = "SELECT * FROM Color"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})


// Show order header on Admin Order Payment
app.get('/admin/order1', (req, res)=>{
    var query = "SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS PaymentDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderheader.StatusID = 1 AND orderstatusdetail.StatusID = 1"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Packing
app.get('/admin/order2', (req, res)=>{
    var query = "SELECT DISTINCT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS PaymentDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderheader.StatusID = 2 AND orderstatusdetail.StatusID = 2 ORDER BY orderheader.OrderID"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Update order header on Admin Order Packing
app.put('/admin/order2', (req, res)=>{
    var OrderID = req.body.OrderID
    var query = "UPDATE orderheader SET StatusID = 3 WHERE OrderID = " + OrderID 
    console.log(query)
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Insert new row to Order Status Detail After Packing
app.post('/admin/order2', (req, res)=>{
    var OrderID = req.body.OrderID
    var query = "INSERT INTO orderstatusdetail SET OrderID = " + OrderID + ", StatusID = 3"
    console.log(query)
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Shipping
app.get('/admin/order3', (req, res)=>{
    var query = "SELECT DISTINCT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS ShippingDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderheader.StatusID = 3 and orderstatusdetail.StatusID= 3 ORDER BY orderheader.OrderID"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Show order header on Admin Order Delivered
app.get('/admin/order4', (req, res)=>{
    var query = "SELECT orderheader.OrderID, DATE_FORMAT(OrderDate, '%m-%d-%Y') AS OrderDate, orderheader.ShippingID, orderheader.Total, orderheader.StatusID, DATE_FORMAT(orderstatusdetail.Date, '%m-%d-%Y') AS DeliveredDate FROM orderheader INNER JOIN orderstatusdetail on orderheader.OrderID = orderstatusdetail.OrderID WHERE orderstatusdetail.StatusID = 4"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Order Detail data Order Header and Shipping
app.get('/admin/orderdetailshipping/:orderid', (req, res)=>{
    var orderid = req.params.orderid
    var query="SELECT * FROM orderheader INNER JOIN shippingdetail on orderheader.ShippingID = shippingdetail.ShippingID WHERE OrderID= " + orderid
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Order Detail data Order Product
app.get('/admin/orderdetailproduct/:orderid', (req, res)=>{
    var orderid = req.params.orderid
    var query="SELECT orderdetail.OrderID, productheader.Name, color.ColorName, orderdetail.Size, orderdetail.Qty, productheader.Price FROM orderdetail INNER JOIN productheader on orderdetail.ProductID = productheader.ProductID INNER JOIN productdetail on productheader.ProductID = productdetail.ProductID INNER JOIN color ON color.ColorID = productdetail.ColorID WHERE orderdetail.OrderID= " + orderid + " AND productdetail.ColorID = orderdetail.ColorID AND productdetail.Size = orderdetail.Size"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Order Detail data Order Date
app.get('/admin/orderdetailtrack1/:orderid', (req, res)=>{
    var orderid = req.params.orderid
    var query="SELECT OrderID, StatusID AS StatusID1, DATE_FORMAT(Date, '%m-%d-%Y') AS OrderDate FROM orderstatusdetail WHERE OrderID = " + orderid + " AND StatusID = 1"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Order Detail data Payment Date
app.get('/admin/orderdetailtrack2/:orderid', (req, res)=>{
    var orderid = req.params.orderid
    var query="SELECT OrderID, StatusID AS StatusID2, DATE_FORMAT(Date, '%m-%d-%Y') AS PaymentDate FROM orderstatusdetail WHERE OrderID = " + orderid + " AND StatusID = 2"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Order Detail data Shipping Date
app.get('/admin/orderdetailtrack3/:orderid', (req, res)=>{
    var orderid = req.params.orderid
    var query="SELECT OrderID, StatusID AS StatusID3, DATE_FORMAT(Date, '%m-%d-%Y') AS ShippingDate FROM orderstatusdetail WHERE OrderID = " + orderid + " AND StatusID = 3"
    conn.query(query, (err, result) =>{
        if (err)
            res.json(err)
        else
            res.json(result)
    })
})

// Get Admin Order Detail data Delivered Date
app.get('/admin/orderdetailtrack4/:orderid', (req, res)=>{
    var orderid = req.params.orderid
    var query="SELECT OrderID, StatusID AS StatusID4, DATE_FORMAT(Date, '%m-%d-%Y') AS DeliveredDate FROM orderstatusdetail WHERE OrderID = " + orderid + " AND StatusID = 4"
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
