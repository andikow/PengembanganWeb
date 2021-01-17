import React from 'react';
import Logo from './../assets/img/logo.png';
import './../assets/css/header.css';
import {Link} from 'react-router-dom';
import loadMyScript from './../assets/js/main.js';
import Login from './login.js';
import ShoppingCart from './shoppingCart.js';
export default class Header extends React.Component{
  componentDidMount() {
    loadMyScript();
  }
  render(){

    return(
    <>
    <Login />
    <ShoppingCart />
          <div className="row no-gutters d-flex align-content-center flex-wrap bg-primary">
            <div className="col-lg-5 d-flex flex-wrap">
              <button type="button" className="col-lg-12 no-gutters btn btn-danger" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                <i className = "fal fa-tag fa-fw"></i><b>BLACK FRIDAY SALE! 20% OFF EVERYTHING</b>
              </button>
            </div>
            <div className="offset-lg-4"></div>

            <div className="col-lg-3 d-flex justify-content-center flex-wrap">
              <div className="navbar navbar-dark bg-primary navbar-expand-lg p-0">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link to ="/help">
                    <button type="button" class="btn btn-sm px-2" data-toggle="#" data-target="#">
                      <a class="nav-link p-0">
                        <i className = "fal fa-question fa-fw ml-1 mr-1"></i>
                        <span style ={{fontSize: '0.8rem'}}>Help</span>
                      </a>
                    </button>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/login">
                    <button type="button" className="btn btn-sm px-2" data-toggle="modal" data-target="#modalLogin">
                      <a className = "nav-link p-0">
                        <i className = "fal fa-user fa-fw"></i>
                        <span style ={{fontSize: '0.8rem'}}>Login</span>
                        <i className = "fas fa-caret-down fa-fw ml-1"></i>
                      </a>
                    </button>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/shoppingcart">
                    <button type="button" className="btn btn-sm px-2" data-toggle="modal" data-target="#modalCart">
                      <a className="nav-link p-0">
                        <i className = "fal fa-shopping-cart fa-fw mr-1"></i>
                      <span style ={{fontSize: '0.8rem'}}>Cart</span>
                    </a>
                    </button>
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div id="navbar" className="row no-gutters align-content-center bg-secondary" style={{height:"100px"}}>
            <div className="col-lg-3 d-flex justify-content-center">
              <Link to = "/"><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="col-lg-2 btn">
              <div className="row d-flex justify-content-center">
                <h3>Create</h3>
              </div>
              <div className="row d-flex justify-content-center">
                <h5 className="gray">Custom Products</h5>
              </div>
            </div>
              <div className="col-lg-2 btn">
                <Link to ="/shop">
                <div className="row d-flex justify-content-center">
                  <h3>Shop</h3>
                </div>
                <div className="row d-flex justify-content-center">
                  <h5 className="gray">Marketplace Designs</h5>
                </div>
              </Link>
              </div>
            <form class="col-lg-5 form-inline">
              <input class="form-control col-lg-7 mr-sm-2" type="text" placeholder="Find Designs or Products" />
              <button class="btn btn-info my-2 my-sm-2" type="submit">Search</button>
              <i className="fal fa-heart fa-2x ml-4"></i>
            </form>
          </div>
    </>
    )
  }
}
