import React from 'react';

export default class About extends React.Component{

  render(){

    return(
    <>
<footer className="page-footer font-small stylish-color-dark pt-4 btn-primary">
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
            <a href="#!" className=" text-secondary fas fa-tshirt"><span style={{paddingRight:8}}></span> Your Orders</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary fas fa-question"><span style={{paddingRight:15}}></span> Help</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary fas fa-envelope"><span style={{paddingRight:12}}></span> Contact</a>
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
            <a href="#!" className=" text-secondary fab fa-facebook"><span style={{paddingRight:8}}></span> Facebook</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary fab fa-twitter"><span style={{paddingRight:8}}></span> Twitter</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary fab fa-instagram"><span style={{paddingRight:12}}></span> Instagram</a>
          </li>
          <li>
            <a href="#!" className=" text-secondary fab fa-pinterest"><span style={{paddingRight:12}}></span> Pinterest</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <hr />

  <div className="footer-copyright text-center py-3 bg-secondary">Binco prints a huge variety of custom clothing like T-shirts, hoodies and more. Your order is handled daily with a lot of love  ❤️ from Indonesia and delivered worldwide!
  </div>

</footer>

    </>
    )
  }
}
