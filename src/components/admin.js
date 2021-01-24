import React from 'react';
import './../assets/css/admin.css'
import {Link} from 'react-router-dom';

export default class Profil extends React.Component{

  constructor(){
    super();
    this.state = {
      orderHeader : [],
      totalOrder: 0,
      totalRevenue: [],
      totalCustomers: 0,
      totalProducts: 0
    }
  }

  getOrderHeader(){
    fetch ('http://localhost:8000/admin')
    .then(response => response.json())
    .then(res => {
      this.setState({
        orderHeader: res
      })
      this.setState({
        totalOrder: res.length
      })
    })

    fetch ('http://localhost:8000/admintotalcustomers')
    .then(response => response.json())
    .then(res => {
      this.setState({
        totalCustomers: res.length    
      })
    })

    fetch ('http://localhost:8000/admintotalproducts')
    .then(response => response.json())
    .then(res => {
      this.setState({
        totalProducts: res.length    
      })
    })

    fetch ('http://localhost:8000/admintotalrevenue')
    .then(response => response.json())
    .then(res => {
      this.setState({
        totalRevenue: res     
      })
      console.log(res)
    })
  }


  componentDidMount(){
    this.getOrderHeader()
  }

  render(){

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

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
                                <li className="active"><Link to ="/admin"><span className="fa fa-tachometer-alt"></span> Dashboard</Link></li>
                                <li><Link to ="/admin/order1"><span className="fa fa-boxes"></span> Orders</Link></li>
                                <li><Link to ="/admin/product"><span className="fa fa-tshirt"></span> Product</Link></li>
                                <br/><br/><br/><br/>
                                <li><Link to ="/"><span className="fa fa-sign-out-alt"></span> Logout</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                          <div class="row">
                              <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#FCCB58'}} class=" fa-4x fas fa-users"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Customers</p>
                                          <p style={{fontSize:30}} class="card-title">{this.state.totalCustomers}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#64CBCE'}} class=" fa-4x fa fa-shopping-cart"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Orders</p>
                                          <p style={{fontSize:30}} class="card-title">{this.state.totalOrder}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#6BD098'}} class=" fa-4x fa fa-dollar-sign"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Revenue</p>
                                          <p style={{fontSize:30}} class="card-title">
                                            {/* {
                                              this.state.map((totalRevenue) => {
                                                return <h1>{totalRevenue.Total}</h1>
                                              })
                                            } */}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#EF8157'}} class=" fa-4x fa fa-tshirt"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Products</p>
                                          <p style={{fontSize:30}} class="card-title">{this.state.totalProducts}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                              </div>
                              <br/>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-header">
                                    <h5 class="card-title"> Recent Orders</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table class="table">
                                        <thead class="text-center text-primary">
                                          <th>
                                            Order ID
                                          </th>
                                          <th>
                                            Order Date
                                          </th>
                                          <th>
                                            Shipping ID
                                          </th>
                                          <th>
                                            Total
                                          </th>
                                          <th>
                                            Status ID
                                          </th>
                                        </thead>
                                        <tbody class="text-center">
                                          {
                                          this.state.orderHeader.map((item, index)=>(
                                            <tr key={index}>
                                              <Link to={"/admin/adminorderdetail/" + item.OrderID} ><td type="button">{item.OrderID}</td></Link>
                                              <td>{item.OrderDate}</td>
                                              <td>{item.ShippingID}</td>
                                              <td>{item.Total}</td>
                                              <td>{StatusDesc(item.StatusID)}</td>
                                            </tr>
                                          ))
                                          }
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
