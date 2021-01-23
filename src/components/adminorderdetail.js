import React from 'react';
import './../assets/css/admin.css'
import {Link} from 'react-router-dom';

export default class Profil extends React.Component{

  constructor(){
    super();
    this.state = {
      OrderDetail : []
    }
  }

  getOrderDetail(){
    fetch ('http://localhost:8000/admin/orderdetail')
    .then(response => response.json())
    .then(res => {
      this.setState({
        OrderDetail: res
      })
      console.log(res)
    })
  }

  componentDidMount(){
    this.getOrderDetail()
  }
  
  render(){    

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
                              <h5 className="mt-4">Shipping ID: { this.state.OrderDetail.ShippingID}</h5>
                              <h5 className="mt-2">Status: Pending</h5>
                              </div>
                              <br/>
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
                                            Qty
                                          </th>
                                          <th>
                                            Subtotal
                                          </th>

                                        </thead>
                                        <tbody class="text-center">
                                        
                                        </tbody>
                                      </table>
                                      <h5 className="text-primary text-right">Shipping Fee: 150000</h5>
                                      <h5 className="text-primary text-right">Sales Tax: 150000</h5>
                                      <h5 className="text-primary text-right">Total: 150000</h5>

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
