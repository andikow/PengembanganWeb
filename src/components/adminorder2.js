import React from 'react';
import './../assets/css/admin.css'

export default class Profil extends React.Component{

  render(){

    return(
    <>
    <div className="content">
        <div className="view-account">
            <section className="module">
                <div className="module-inner">
                    <div className="side-bar">
                        <div className="user-info">
                            <h3 style={{color:'#63BCC9'}}>Admin</h3>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li><a href="#"><span className="fa fa-tachometer-alt"></span> Dashboard</a></li>
                                <li className="active"><a href="#"><span className="fa fa-boxes"></span> Orders</a></li>
                                <li><a href="#"><span className="fa fa-tshirt"></span> Product</a></li>
                                <br/><br/><br/><br/>
                                <li><a href="#"><span className="fa fa-sign-out-alt"></span> Logout</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                          <div class="row">
                              <div class="col-lg-3 col-md-6 col-sm-6">
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
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="biru card card-stats border-0">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#fff'}} class=" fa-4x fa fa-box-full"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category text-white">Packing</p>
                                          <p style={{fontSize:30}} class="card-title text-white">1,205</p>
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
                              </div>
                              <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="card card-stats">
                                  <div class="card-body ">
                                    <div class="row">
                                      <div class="col-5 col-md-4">
                                        <div class="icon-big text-center icon-warning">
                                          <i style={{color:'#EF8157'}} class=" fa-4x fa fa-badge-check"></i>
                                        </div>
                                      </div>
                                      <div class="col-7 col-md-8">
                                        <div class="numbers float-right">
                                          <p class="card-category">Delivered</p>
                                          <p style={{fontSize:30}} class="card-title">1,205</p>
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
                                      <h5 class="card-title"> Packing</h5>
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
                                          <th>
                                            Action
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
                                            <td>
                                              <button className="btn btn-success" type="button"><i class="fas fa-check"></i></button>
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
                                            <td>
                                              <button className="btn btn-success" type="button"><i class="fas fa-check"></i></button>
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
