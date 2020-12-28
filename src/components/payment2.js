import React from 'react';
import './../assets/css/help.css';


export default class Payment extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Payment Methods </h2><br/>
    <p><span style={{fontWeight:'bold'}}>Credit/Debit card:</span> Your credit/debit card will automatically be charged by our financial service provider. Your order will begin processing after all necessary verifications have been completed.</p>
    <p><span style={{fontWeight:'bold'}}>PayPal:</span> The transaction will be processed by PayPal, an external financial service provider. During the checkout process you will be redirected to PayPal and pay with your account there. Your data will not be transferred to Binco. After verifications have been completed by PayPal your order will then be processed. (Not available for all countries.)</p>
    <p>Currency: When shopping on Binco, payments will be processed in USD. If your credit card company or bank uses a different currency, the final transaction price may differ due to currency exchange rates. Please contact your payment provider for further information.</p>
    <p>If you place an order for your company or club, you can enter a different address for deliveries. Please remember this option before you order. Subsequent correction of invoice details (address, tax ID, etc.) isn’t possible.</p>
    </div>
    </>
    )
  }
}
