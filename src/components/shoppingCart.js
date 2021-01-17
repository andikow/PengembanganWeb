import React from 'react';
import Produk1 from '../assets/img/productex1.jpg';
import InputNumeric from './qtycheckout.js';
import Checkout from './checkout.js';
import {Link} from 'react-router-dom';
export default class ShoppingCart extends React.Component{

  render(){

    return(
    <>
    <div className="modal fade px-0" id="modalCart">
      <div class="modal-dialog">
        <div class="modal-content">
          <div className="modal-header">
            <div className="modal-title"><h1>Shopping Cart</h1></div>
          </div>
          <div className="modal-body text-center">
            {/* Start If shopping cart empty */}
            {/* <p>Your cart is empty. Go shopping!</p>
              <button className="btn btn-outline-primary" >Continue Shopping</button>   */}
              {/* End If shopping cart empty       */}

              {/* Start If shopping cart is filled */}
              <div className="row">
                <div className="col-6">
                  <img className="card-img-top" src={Produk1} alt="Product Example" />
                  <span class="uk-card-badge span-fav ml-2 mt-2 mr-2" style={{position: "absolute", right: 10}}><i className="far fa-2x fa-heart"></i></span>
                </div>
                <div className="col-6 text-left">
                  <h2>Product Example 1</h2>
                  <p>Color: Grey</p>
                  <p>Size: 2XL</p>
                  <div class="row">
                    <div class="col-lg-7">
                      <InputNumeric/>
                    </div>
                    <div class="col-lg-5 d-flex flex-wrap align-content-center">
                      <i type="button" class="far fa-2x fa-trash-alt d-flex flex-wrap justify-content-center align-content-center"></i>
                    </div>

                  </div>
                  <h4>Rp100.000</h4>
                </div>
              </div>
            </div>
            <hr />
            <div className="modal-body">
              <div className="row justify-content-between">
                <div className="col-6">Subtotal</div>
                <div className="col-6 text-right">Rp100.000</div>
              </div>
              <div className="row justify-content-between">
                <div className="col-6">Shipping costs</div>
                <div className="col-6 text-right">Rp100.000</div>
              </div>
              <div className="row justify-content-between mt-2">
                <div className="col-6 font-weight-bold">Total</div>
                <div className="col-6 text-right font-weight-bold"><h4>Rp100.000</h4></div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to ="/checkout" className="w-100">
                <button className="btn btn-block btn-primary closeModal">Checkout
                </button>
              </Link>
              <Link to="/shop" className="w-100">
              <button className="btn btn-block btn-outline-primary closeModal">Continue Shopping
              </button>
              </Link>
            </div>
            {/* End If shopping cart is filled */}
          </div>
        </div>
      </div>
      </>
    )
  }
}
