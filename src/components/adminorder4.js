import React from 'react';
import './../assets/css/admin.css'
import {Link} from 'react-router-dom';

export default class Profil extends React.Component{

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
                            <div class="col-lg-3 col-md-6 col-sm-6">
                            <Link to ="/admin/order1">
                              <div class=" card card-stats">
                                <div class="card-body ">
                                  <div class="row">
                                    <div class="col-5 col-md-4">
                                      <div class="icon-big text-center icon-warning">
                                        <i style={{color:'#FCCB58'}} class=" fa-4x fa fa-sack-dollar"></i>
                                      </div>
                                    </div>
                                    <div class="col-7 col-md-8">
                                      <div class="numbers float-right">
                                        <p class="card-category">Payment</p>
                                        <p style={{fontSize:30}} class="card-title">1,205</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="card-footer bg-secondary">
                                  <i class="far fa-sync"></i>&emsp;Update Now
                                </div>
                              </div>
                              </Link>
                            </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                              <Link to ="/admin/order2">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#64CBCE'}} class=" fa-4x fa fa-box-full"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Packing</p>
                                          <p style={{fontSize:30}} class="card-title">1,205</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                                </Link>
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                              <Link to ="/admin/order3">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#6BD098'}} class=" fa-4x fa fa-shipping-fast"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Shipping</p>
                                          <p style={{fontSize:30}} class="card-title">1,205</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                                </Link>
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                              <Link to ="/admin/order4">
                                <div class="merah card card-stats border-0">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#fff'}} class=" fa-4x fa fa-badge-check"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category text-white">Delivered</p>
                                          <p style={{fontSize:30}} class="card-title text-white">1,205</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="card-footer bg-secondary">
                                    <i class="far fa-sync"></i>&emsp;Update Now
                                  </div>
                                </div>
                                </Link>
                              </div>
                              <br/>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-header">
                                      <h5 class="card-title"> Delivered</h5>
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
                                            Qty
                                          </th>
                                          <th>
                                            Subtotal
                                          </th>
                                          <th>
                                            ProductID
                                          </th>
                                          <th>
                                            StatusID
                                          </th>

                                        </thead>
                                        <tbody class="text-center">
                                          <tr>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
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
