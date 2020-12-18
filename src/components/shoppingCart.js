import React from 'react';
import Produk1 from '../assets/img/productex1.jpg'

export default class ShoppingCart extends React.Component{

  render(){

    return(
    <>
        <div className="modal">
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
            <img className="card-img-top" src={Produk1} alt="Product Example" width="100px" height="300px" />
            <span class="uk-card-badge span-fav ml-2 mt-2 mr-2" style={{position: "absolute", right: 10}}><i className="far fa-2x fa-heart"></i></span>
            </div>
            <div className="col-6 text-left">
                <h2>Product Example 1</h2>
                <p>Color: Grey</p>
                <p>Size: 2XL</p>
                <p><button className="btn btn-info">-</button><span className=" px-3 py-3">2</span><button className="btn btn-info">+</button><span className="float-right"><i type="button" className="far fa-2x mt-2 fa-trash-alt"></i></span></p>
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
                    <div className="col-6 text-right font-weight-bold">Rp100.000</div>
                </div>
            </div>
            <div className="modal-body">
                <button className="btn btn-primary w-100">Checkout</button>
                <button className="btn btn-outline-primary w-100">Continue Shopping</button>
            </div>
            {/* End If shopping cart is filled */}
        </div>
    </>
    )
  }
}
