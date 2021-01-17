import React from 'react';
import './../assets/css/profil.css'
import profil from './../assets/img/profil.PNG';
import {Link} from 'react-router-dom';

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
                            <img className="img-profile rounded-circle img-responsive center-block" src={profil} alt=""  />
                            <p>Andikatama</p>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li className="active"><a href="#"><span className="fa fa-user"></span> My Account</a></li>
                                <li><a href="#"><span className="fa fa-box-alt"></span> My Orders</a></li>
                                <li><a href="#"><span className="fa fa-users"></span> Social Accounts</a></li>
                                <br/><br/><br/><br/>
                                <li><a href="#"><span className="fa fa-user-times"></span> Delete Account</a></li>
                                <li><a href="#"><span className="fa fa-sign-out-alt"></span> Logout</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                            <h2>My Account</h2>
                            <div class="row">
                              <div class="col">
                                <br/>
                                <div className="box">
                                  <h5>Account Information</h5>
                                  <hr/>
                                  <div class="row">
                                    <div class="col">
                                      <p>Name</p>
                                      <p>Email</p>
                                      <p>Birth Date</p>
                                      <p>Phone Number</p>
                                      <p>Password</p>
                                    </div>
                                    <div class="col">
                                      <p>Andikatama</p>
                                      <p>andikatama@gmail.com</p>
                                      <p>10-02-2001</p>
                                      <p>087862407686</p>
                                      <p>******</p>
                                      <button className="btn btn-block btn-danger my-0 font-weight-bold btn-sm" type="button">Change Password</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col">
                                <br/>
                                <div className="box">
                                  <h5>Address </h5>
                                  <hr/>
                                  <div class="row">
                                    <div class="col">
                                      <p>Street Address</p>
                                      <p>Country</p>
                                      <p>Zip code</p>
                                      <p>City/Town</p>
                                    </div>
                                    <div class="col">
                                      <p>Jl. Merbau No. 58</p>
                                      <p>Indonesia</p>
                                      <p>20123</p>
                                      <p>Medan</p>
                                      <button className="btn btn-block btn-danger my-0 font-weight-bold btn-sm" type="button">Edit</button>
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
