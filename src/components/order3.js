import React from 'react';
import './../assets/css/help.css';
import {Link} from 'react-router-dom';


export default class Order extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Order Status</h2><br/>
    <p>You can log in to your account anytime to view your order status. If you can't remember your password, simply use the Forgot Password tool on the login page. </p>
    <p>If you've placed your order as a guest, you can follow the link in your order confirmation email to look into it. You don't need a password for this. </p>
    </div>
    </>
    )
  }
}
