import React from 'react';
import './../assets/css/admin.css'
import {Link} from 'react-router-dom';

export default class Profil extends React.Component{

  constructor(){
    super();
    this.state = {
      orderHeader : []
    }
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
                              <h4>Order ID: { this.props.match.params.orderid}</h4>
                              </div>
                              <br/>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-header bg-color-transparent">
                                      <h5 class="card-title">Payment</h5>
                                  </div>
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table class="table">
                                        <thead class="text-center text-primary">
                                          <th>
                                            OrderID
                                          </th>
                                          <th>
                                            OrderDate
                                          </th>
                                          <th>
                                            ShippingID
                                          </th>
                                          <th>
                                            Payment
                                          </th>
                                          <th>
                                            Payment Date
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
