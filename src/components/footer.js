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
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <hr />

  <ul className="list-unstyled list-inline text-center py-2">
    <li className="list-inline-item">
      <h5 className="mb-1">Register for free</h5>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>

  <hr />

  <ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fab fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1">
        <i className="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1">
        <i className="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>

</footer>

    </>
    )
  }
}
