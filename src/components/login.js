import React from 'react';
import '../assets/css/login.css';

export default class Login extends React.Component{

  render(){

    return(
    <>
        <div className="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title"><h1>Login</h1></div>
              </div>
              <div className="modal-body">
                <form>
                  <p>Want to shop? <span type="button" className="text-primary"><i className="fa fa-user ml-2 mr-2" />Register now</span></p>
                  <input type="text" className="form-control w-100" placeholder="Email or Username"/>
                  <p className="mt-2 mr-3 text-right w-100"><input type="text" className="form-control" placeholder="Password"/> <i className="fas fa-eye mr-2"/>Show</p>
                  <p><span className="ml-4"><input type="checkbox" className="form-check-input" id="stayin"/>
                    <label htmlFor="stayin" className="form-check-label">Stay signed in</label></span>
                    <span className="float-right" type="button"><h5 className=" text-primary">Forgot your password?</h5></span>
                  </p>
                  <button className="btn btn-primary w-100 mt-2">Login</button>
                  <p className="or mt-3"><span>or</span></p>
                  <button className="btn text-light mt-2 w-100" style={{backgroundColor: "#3B5998"}}><i className="fab fa-facebook-square mr-2" />Log in with Facebook</button>

                </form>
              </div>
            </div>
          </div>
        </div>
    </>
    )
  }
}
