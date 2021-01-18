import React from 'react';
import '../assets/css/login.css';
import {Link} from 'react-router-dom';

export default class ForgotPassword extends React.Component{

  render(){

    return(
    <>
      <div class="modal fade" id="modalForgot">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title"><h1>Forgot your password?</h1></div>
            </div>
            <div className="modal-body">
              <form>
                <p>We'll give you a new one. Please enter your email address</p>
                <input type="text" className="form-control w-100" placeholder="Email"/>
                <button className="btn btn-primary w-100 mt-4">New password</button>
                <Link to="/login">
                <button className="btn text-primary w-100 mt-4 closeModal" data-toggle="modal" data-target="#modalLogin">Back to login</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}
