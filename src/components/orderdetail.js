import React from 'react';
import './../assets/css/orderdetail.css'
import OrderDetail from './orderdetail.js'
import {Link} from 'react-router-dom';

export default class MyOrder extends React.Component{

  render(){

    return(
    <>
    <div className="content">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">My Orders</a></li>
            <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:'bold'}}>Order #11508259</li>
          </ol>
        </nav>

        <div className="row">
          <div className="col">
            <h2>Order #11508259</h2>
          </div>
          <div className="col" style={{textAlign:'right'}}>
            <p>Order Date : 12/14/20</p>
          </div>
        </div>


          <br/>

          <div className="row pt-2">
          <div className="card-body">
            <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-hourglass"></i></div>
                </div>
                <h4 className="step-title">Confirmed Order</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-money-check-alt"></i></div>
                </div>
                <h4 className="step-title">Payment</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-box-full"></i></div>
                </div>
                <h4 className="step-title">Packing</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-shipping-fast"></i></div>
                </div>
                <h4 className="step-title">Shipping</h4>
              </div>
              <div className="step">
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-check"></i></div>
                </div>
                <h4 className="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>



      </div>
      <div className="box">
        <div class="row">
          <div class="col">
            <h3>Payment pending</h3>
            <p>We’re not yet able to print your order</p>
          </div>
          <div class="col">
            <ul className="list-unstyled">
              <li className="cancel">
                <a href="#"><i className="fa fa-times mr-2"></i>Cancel Order</a>
              </li>
            </ul>
          </div>
        </div>

        <hr/>

        <p>Please complete your payment first, try again or choose a different payment method.</p>
        <button className="btn btn-danger my-0 font-weight-bold" type="button" style={{width:250}}>Pay Now</button>
      </div>

      <div class="row">
        <div class="col-lg-2">
          <img  alt="" height="200px" width="180px"  />
        </div>

        <div class="col pl-4">
          <h3>Nama barang</h3>
          <p>Size: L</p>
          <p>Color: heather gray</p>
          <p>Quantity: 1</p>
          <p>Article number: 18575391</p>

        </div>
      </div>

      <br/>

      <div class="box">
        <div class="row">
          <div class="col">
            <h2><i className="fa fa-shipping-fast"></i> Shipping: International Standard</h2>
            <br/>
                <h5>Shipping Address</h5>

          </div>
          <div class="col-xl-4">
            <h2>Total </h2>
            <br/><br/>
            <h5>Order Overview</h5>
            <p>Subtotal </p>
            <p>Packing & shipping </p>
            <br/>
            <p>Payment Method: <span style={{fontWeight:'bold', fontSize:17}}>Paypal</span></p>
          </div>
        </div>

      </div>


      </div>
    </div>
    </>
    )
  }
}
