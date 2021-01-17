import React from 'react';
import './../assets/css/profil.css'
import profil from './../assets/img/profil.PNG';
import MyOrder from './myorder.js';
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
                                <li><a href="#"><span className="fa fa-user"></span> My Account</a></li>
                                <li className="active"><a href="#"><span className="fa fa-box-alt"></span> My Orders</a></li>
                                <li><a href="#"><span className="fa fa-users"></span> Social Accounts</a></li>
                                <br/><br/><br/><br/>
                                <li><a href="#"><span className="fa fa-user-times"></span> Delete Account</a></li>
                                <li><a href="#"><span className="fa fa-sign-out-alt"></span> Logout</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                            <MyOrder />


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
