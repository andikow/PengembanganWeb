import React from 'react';
import '../assets/css/login.css';

export default class ChangePassword extends React.Component{

  render(){

    return(
    <>
        <div className="container">
        <div className="row mt-2">
            <div className="col-lg-6 col-12">
            <h1>Change password</h1>             
            <form>        
                <p className="mt-3 mr-3 w-100"><input type="text" className="form-control" placeholder="Current Password"/><span type="button"><i className="fas fa-eye mr-2"/>Show</span></p> 
                <p className="mt-3 mr-3 w-100"><input type="text" className="form-control" placeholder="New Password"/><span type="button"><i className="fas fa-eye mr-2"/>Show</span></p> 
                <p className="mt-3 mr-3 w-100"><input type="text" className="form-control" placeholder="Confirm Password"/><span type="button"><i className="fas fa-eye mr-2"/>Show</span></p>                
                <button className="btn btn-primary w-50 mt-2 mb-3">Apply</button>                                               
            </form> 
            </div>                     
        </div>
        </div>
    </>
    )
  }
}
