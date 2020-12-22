import React from 'react';
import '../assets/css/login.css';

export default class ForgotPassword extends React.Component{

  render(){

    return(
    <>
        <div className="modal-body">
            <div className="modal-header">
                <div className="modal-title"><h1>Forgot your password?</h1></div>    
            </div> 
            <div className="modal-body">  
            <form>           
                <p>We'll give you a new one. Please enter your email address</p>               
                <input type="text" className="form-control w-100" placeholder="Email"/>                 
                <button className="btn btn-primary w-100 mt-4">New password</button>
                <button className="btn text-primary w-100 mt-4">Back to login</button>                             
            </form>
            </div>                      
        </div>
    </>
    )
  }
}
