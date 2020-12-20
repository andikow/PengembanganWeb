import React from 'react';
import './../assets/css/myorder.css'
import Home from './home.js'
import Myorder from './myorder.js'

export default class MyOrder extends React.Component{

  render(){

    return(
    <>
    <div className="content">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:'bold'}}>My Orders</li>
          </ol>
        </nav>

          <h2>Order Overview</h2>
          <br/>

          <div className="row pt-2">
            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Preview</p>
            </div>

            <div className="col-lg-4">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Status</p>
            </div>

            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Order ID</p>
            </div>

            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Order date</p>
            </div>

            <div class="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Qty</p>
            </div>

            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Price</p>
            </div>

            <div class="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>More info</p>
            </div>

          </div>

          <hr/>

          <div className="row pt-2">
            <div className="col">
              <img className="d-flex flex-wrap m-auto"  alt="" height="100px" width="100px"  />
            </div>

            <div className="col-lg-4 d-flex flex-wrap justify-content-center align-content-center">
              <i className="fa fa-credit-card"></i><p> &emsp; Payment pending</p>
            </div>

            <div className="col d-flex flex-wrap justify-content-center align-content-center">
              <p>11508259</p>
            </div>

            <div className="col d-flex flex-wrap justify-content-center align-content-center">
              <p>12/14/20</p>
            </div>

            <div className="col d-flex flex-wrap justify-content-center align-content-center">
              <p>1</p>
            </div>

            <div className="col d-flex flex-wrap justify-content-center align-content-center">
              <p>$57.49</p>
            </div>

            <div className="col d-flex flex-wrap justify-content-center align-content-center">
              <button type="button" className="btn btn-outline-primary">Details</button>
            </div>

          </div>



      </div>
    </div>
    </>
    )
  }
}