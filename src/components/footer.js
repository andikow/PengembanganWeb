import React from 'react';
import payment from './../assets/img/payment.png';
import shipping from './../assets/img/shipping.png';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component{

  render(){

    return(
    <>
<footer className="page-footer font-small stylish-color-dark pt-4 btn-primary">
    <div className="row no-gutters">
      <div class="col-lg-4 text-center text-white" style={{fontSize:20}}>
        <i className="fa fa-lock"></i>
        <p>All secure payment methods</p>
        <img src={payment} alt="logo" width="300px" height="60px" />
      </div>

      <div class="col-lg-4 text-center text-white" style={{fontSize:20}}>
        <i className="fa fa-smile"></i>
        <p>Satisfaction guaranteed</p>
        <p style={{fontSize:15}}>Easy returns within 30 days, no questions asked!</p>
      </div>

      <div class="col-lg-4 text-center text-white" style={{fontSize:20}}>
        <i className="fa fa-truck"></i>
        <p>Worldwide delivery</p>
        <img src={shipping} alt="logo" width="300px" height="60px" />
      </div>
    </div>

<hr/>

  <div className="container text-center text-md-left">
    <div className="row">
      <div className="col-md-4 mx-auto my-2 btn-secondary">
        <p className="mt-3 font-weight-bold" style={{fontSize:18}}>Subscribe to our newsletter!</p>
        <form className="input-group py-2">
          <input type="text" className="form-control" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-danger my-0 font-weight-bold" type="button">Subscribe</button>
              </div>
        </form>
      </div>

      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-white mt-3 mb-4">Service</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-secondary"><i className="fas fa-fw mr-2 fa-tshirt"></i>Your Orders</a>
          </li>
          <li>
            <a href="#" className="text-secondary"><i className="fas fa-fw mr-2 fa-question"></i>Help</a>
          </li>
          <li>
            <a href="#" className="text-secondary"><i className="fas fa-fw mr-2 fa-envelope"></i>Contact</a>
          </li>

        </ul>
      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-white mt-3 mb-4">The Company</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!" className=" text-secondary">About Us</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary">Privacy</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary">Terms & Condition</a>
          </li>
        </ul>
      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-white mt-3 mb-4">Follow Us</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#" className="text-secondary"><i className="fab fa-fw mr-2 fa-facebook"></i>Facebook</a>
          </li>
          <li>
            <a href="#" className="text-secondary"><i className="fab fa-fw mr-2 fa-twitter"></i>Twitter</a>
          </li>
          <li>
            <a href="#" className="text-secondary"><i className="fab fa-fw mr-2 fa-instagram"></i>Instagram</a>
          </li>
          <li>
            <a href="#" className="text-secondary"><i className="fab fa-fw mr-2 fa-pinterest"></i>Pinterest</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

<hr/>

  <div className="footer-copyright text-center py-3">Binco prints a huge variety of custom clothing like T-shirts, hoodies and more. Your order is handled daily with a lot of love <i className=" text-danger fa fa-heart"></i> from Indonesia and delivered worldwide!
  </div>
</footer>

    </>
    )
  }
}
