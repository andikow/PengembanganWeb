import React from 'react';
import './../assets/css/contact.css';
import photo from './../assets/img/contact.jpg';
import {Link} from 'react-router-dom';


export default class Contact extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2 style={{textAlign:'center'}}>Contact Form</h2><br/>
    <div class="row">

      <div class="col-lg-6">
        <img src={photo} alt="photo" width="100%" height="65%"/><br/><br/>
      </div>
      <div class="col-lg-6">
        <form>
        <div>
          <label>Order Number</label>
        <input type="text" className="form-control" placeholder="Order Number" />
        </div>
        </form>
        <form>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
        </form>
        <form>
        <div>
          <label>Email</label>
        <input type="text" className="form-control" placeholder="Email" />
        </div>
        </form>
        <form>
        <div>
          <label>Your message</label>
        <textarea type="text" className="form-control" placeholder="Your message" style={{height:200}}></textarea>
        </div>
        </form>
        <br/>
        <button className="btn btn-danger float-right my-0 font-weight-bold btn-sm" type="button">Send</button>
      </div>
    </div>
    </div>
    </>
    )
  }
}
