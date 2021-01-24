import React from 'react';
import './../assets/css/admin.css'
import {Link} from 'react-router-dom';

export default class Profil extends React.Component{

  constructor(){
    super();
    this.state = {
      ShippingID: 0,
      StatusID: 0,
      CustomerID: 0,
      FirstName: 0,
      LastName: 0,
      Address: '',
      Building: '',
      Country: '',
      ZipCode: '',
      City: '',
      ShippingMethod: '',
      Phone: '',
      ShippingCosts: 0,
      SalesTax: 0,
      Total: 0,
      OrderProduct: [],
      OrderDate: '-',
      PaymentDate: '-',
      ShippingDate: '-',
      DeliveredDate: '-'
    }
  }

  getOrderDetail(){
    fetch ('http://localhost:8000/admin/orderdetailshipping/' + this.props.match.params.orderid)
    .then(response => response.json())
    .then(res => {
      this.setState({ ShippingID: res[0].ShippingID })
      this.setState({ StatusID: res[0].StatusID })
      this.setState({ CustomerID: res[0].CustomerID })
      this.setState({ FirstName: res[0].FirstName })
      this.setState({ LastName: res[0].LastName })
      this.setState({ Address: res[0].Address})
      this.setState({ Building: res[0].Building })
      this.setState({ Country: res[0].Country })
      this.setState({ ZipCode: res[0].ZipCode })
      this.setState({ City: res[0].City })
      this.setState({ ShippingMethod: res[0].ShippingMethod })
      this.setState({ Phone: res[0].Phone })
      this.setState({ ShippingCosts: res[0].ShippingCosts })
      this.setState({ SalesTax: res[0].SalesTax })
      this.setState({ Total: res[0].Total })
    })

    fetch ('http://localhost:8000/admin/orderdetailproduct/' + this.props.match.params.orderid)
    .then(response => response.json())
    .then(res => {
      this.setState({ 
        OrderProduct: res
      })
    })

    fetch ('http://localhost:8000/admin/orderdetailtrack1/' + this.props.match.params.orderid)
    .then(response => response.json())
    .then(res => {
      if(res.length < 1){
        return (this.state.OrderDate)
      }
      else{
        this.setState({ OrderDate: res[0].OrderDate})
      } 
    })

    fetch ('http://localhost:8000/admin/orderdetailtrack2/' + this.props.match.params.orderid)
    .then(response => response.json())
    .then(res => {
      if(res.length < 1){
        return (this.state.PaymentDate)
      }
      else{
        this.setState({ PaymentDate: res[0].PaymentDate})
      } 
    })

    fetch ('http://localhost:8000/admin/orderdetailtrack3/' + this.props.match.params.orderid)
    .then(response => response.json())
    .then(res => {
      if(res.length < 1){
        return (this.state.ShippingDate)
      }
      else{
        this.setState({ ShippingDate: res[0].ShippingDate})
      }      
    })

    fetch ('http://localhost:8000/admin/orderdetailtrack4/' + this.props.match.params.orderid)
    .then(response => response.json())
    .then(res => {
      if(res.length < 1){
        return(this.state.DeliveredDate)
      }
      else{
        this.setState({ DeliveredDate: res[0].DeliveredDate})
      }      
    })
    }

  componentDidMount(){
    this.getOrderDetail()
  }
  
  render(){    

    function Subtotal(Price,Qty){
      var Price= Price
      var Qty = Qty
      var Subtotal = Price * Qty
      return(Subtotal)
    }

    function StatusDesc(statusID){
      if (statusID == 1){
        return "NOT YET PAID"
      }
      else if (statusID == 2)
      {
        return "PACKED"
      }
      else if (statusID == 3)
      {
        return "SHIPPING"
      }
      else if (statusID == 4)
      {
        return "FINISH"
      }
    }

    return(
    <>
    <div className="content px-0">
        <div className="view-account">
            <section className="module">
                <div className="module-inner">
                    <div className="side-bar">
                        <div className="user-info">
                            <h3 style={{color:'#63BCC9'}}>Admin</h3>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li><Link to ="/admin"><span className="fa fa-tachometer-alt"></span> Dashboard</Link></li>
                                <li className="active"><Link to ="/admin/order1"><span className="fa fa-boxes"></span> Orders</Link></li>
                                <li><Link to ="/admin/product"><span className="fa fa-tshirt"></span> Product</Link></li>
                                <br/><br/><br/><br/>
                                <li><Link to ="/"><span className="fa fa-sign-out-alt"></span> Logout</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="content-panel">
                        <div className="content-header-wrapper">
                          <div class="row">                              
                              <div class="col-12">
                              <h3 className="text-primary">Order ID: { this.props.match.params.orderid}</h3>
                              </div>
                              <br/>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-header bg-color-transparent">
                                      <h5 class="card-title">Shipping Detail</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table class="table">
                                          <tr>
                                            <th className="text-primary">Shipping ID</th>
                                            <td>{this.state.ShippingID}</td>
                                          </tr>  
                                          <tr>
                                            <th className="text-primary">Status</th>
                                            <td>{StatusDesc(this.state.StatusID)}</td>
                                          </tr>   
                                          <tr>
                                            <th className="text-primary">Customer ID</th>
                                            <td>{this.state.CustomerID}</td>
                                          </tr>
                                          <tr>
                                            <th className="text-primary">Name</th>
                                            <td>{this.state.FirstName}{this.state.LastName}</td>
                                          </tr>
                                          <tr>
                                            <th className="text-primary">Address</th>
                                            <td>{this.state.Address} {this.state.Building}, {this.state.City}, {this.state.Country} {this.state.ZipCode}</td>
                                          </tr>
                                          <tr>
                                            <th className="text-primary">Shipping Method</th>
                                            <td>{this.state.ShippingMethod}</td>
                                          </tr>
                                          <tr>
                                            <th className="text-primary">Phone</th>
                                            <td>{this.state.Phone}</td>
                                          </tr>
                                        {/* </tbody> */}
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-header bg-color-transparent">
                                      <h5 class="card-title">Product</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table class="table">
                                        <thead class="text-center text-primary">
                                          <th>
                                            No
                                          </th>
                                          <th>
                                            Item
                                          </th>
                                          <th>
                                            Color
                                          </th>
                                          <th>
                                            Size
                                          </th>
                                          <th>
                                            Price
                                          </th>
                                          <th>
                                            Qty
                                          </th>
                                          <th>
                                            Subtotal
                                          </th>
                                        </thead>
                                        <tbody class="text-center">
                                        {
                                          this.state.OrderProduct.map((item, index)=>(
                                            <tr key={index}>
                                              <td>{index +1}</td>
                                              <td>{item.Name}</td>
                                              <td>{item.ColorName}</td>
                                              <td>{item.Size}</td>
                                              <td>{item.Price}</td>
                                              <td>{item.Qty}</td>
                                              <td>{Subtotal(item.Price,item.Qty)}</td>
                                            </tr>
                                          ))
                                        }                                        
                                        </tbody>
                                      </table>
                                      <h5 className="text-primary text-right">Shipping Fee: {this.state.ShippingCosts}</h5>
                                      <h5 className="text-primary text-right">Sales Tax: {this.state.SalesTax}</h5>
                                      <h5 className="text-primary text-right">Total: {this.state.Total}</h5>

                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-header bg-color-transparent">
                                      <h5 class="card-title">Order Track</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table class="table">
                                        <thead class="text-center text-primary">
                                          <th>
                                            Order
                                          </th>
                                          <th>
                                            Payment
                                          </th>
                                          <th>
                                            Shipping
                                          </th>
                                          <th>
                                            Delivered
                                          </th>
                                        </thead>
                                        <tbody class="text-center">
                                          <tr>
                                            <td>{this.state.OrderDate}</td>
                                            <td>{this.state.PaymentDate}</td>
                                            <td>{this.state.ShippingDate}</td>
                                            <td>{this.state.DeliveredDate}</td>
                                          </tr>                                        
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                          </div>




                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    </>
    )
  }
}
