import React from 'react';
import '../assets/css/login.css';

export default class Register extends React.Component{

  render(){

    return(
    <>
        <div className="modal-body">
            <div className="modal-header">
                <div className="modal-title"><h1>Welcome to Binco!</h1></div>    
            </div> 
            <div className="modal-body">  
            <form>           
                <p>Alread have an account? <span type="button" className="text-primary">Back to login</span></p>               
                <input type="text" className="form-control w-100" placeholder="Email"/>                 
                <button className="btn btn-primary w-100 mt-4">Get started now</button>
                <p className="or mt-3"><span>or</span></p>
                <button className="btn text-light mt-2 w-100" style={{backgroundColor: "#3B5998"}}><i className="fab fa-facebook-square mr-2" />Register with Facebook</button>                
            </form>
            </div>                      
        </div>
    </>
    )
  }
}
