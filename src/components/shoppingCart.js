import React from 'react';
import InputNumeric from './qtycheckout.js';
import {Link} from 'react-router-dom';
import $ from 'jquery';
export default class ShoppingCart extends React.Component{
  constructor() {
    super()
    this.state={
      cart :[],
      subtotal: [],
      shippingcost : 45000
    }
  }
  componentDidMount() {
      this.getCart();
      this.getSubtotal();
        $('#modalCart').css("margin-left", $(window).width() - $('.modal-content').width() - 6/8*$(window).width());
        $('.modal-content').css({ height: $(window).innerHeight() });
        $(".closeModal").on('click', function() {
              $('.modal').modal('hide');
          });
  }
  getCart() {
    fetch('http://localhost:8000/getCart/',{
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        cart : res,
      })
  })
}

  getSubtotal(){
    fetch('http://localhost:8000/getSubtotal/',{
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        subtotal : res,
      })
  })
  }

  render(){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
    <>
    <div className="modal fade px-0" id="modalCart">
      <div class="modal-dialog">
        <div class="modal-content">
          <div className="modal-header">
            <div className="modal-title"><h1>Shopping Cart</h1></div>
          </div>
          <div className="modal-body text-center overflow-auto">
            {/* Start If shopping cart empty */}
            {/* <p>Your cart is empty. Go shopping!</p>
              <button className="btn btn-outline-primary" >Continue Shopping</button>   */}
              {/* End If shopping cart empty       */}

              {/* Start If shopping cart is filled */}
              {this.state.cart.map((item, index)=>(
              <div className="row border-bottom border-primary mx-1">
                <div className="col-6 mt-1">
                  <img className="card-img-top" src={item.PictureLink1} alt="ProductLink" />
                  <span class="uk-card-badge span-fav ml-2 mt-2 mr-2" style={{position: "absolute", right: 10}}><i className="far fa-2x fa-heart"></i></span>
                </div>
                <div className="col-6 text-left">
                  <h2>{item.Name}</h2>
                  <p>Color: {item.ColorName}</p>
                  <p>Size: {item.Size}</p>
                  <div class="row">
                    <div class="col-lg-7">
                      <InputNumeric value={item.Qty}/>
                    </div>
                    <div class="col-lg-5 d-flex flex-wrap align-content-center">
                      <i type="button" class="far fa-2x fa-trash-alt d-flex flex-wrap justify-content-center align-content-center"></i>
                    </div>

                  </div>
                  <br/>
                  <h4>IDR {numberWithCommas(item.Price)}</h4>
                </div>
              </div>
            ))
            }

            </div>

            <div className="m-2 p-2">
              <div className="row justify-content-between">
                <div className="col-6">Subtotal</div>
                {this.state.subtotal.map((item, index)=>(
                <div className="col-6 text-right">IDR {numberWithCommas(item.subtotal)}</div>
                ))}
              </div>
              <div className="row justify-content-between">
                <div className="col-6">Shipping costs</div>
                <div className="col-6 text-right">IDR {numberWithCommas(this.state.shippingcost)}</div>
              </div>
              <div className="row justify-content-between mt-2">
                <div className="col-6 font-weight-bold">Total</div>
                <div className="col-6 text-right font-weight-bold">
                {this.state.subtotal.map((item, index)=>(
                 <h4> IDR {numberWithCommas(item.subtotal + this.state.shippingcost)}</h4>
                ))}
                </div>
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
