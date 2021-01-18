import React from 'react';
import './../assets/css/help.css';
import {Link} from 'react-router-dom';


export default class Order extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Exchanges and Returns</h2><br/>
    <h3>Fair Return Policy</h3>
    <p>Every item you order at Binco or a Binco Partner Shop is printed for you on-demand by hand. That’s what distinguishes us from other e-commerce retailers. Returns aren’t put back on our warehouse shelves, as we can’t resell them. But we want to make sure you’re 100% satisfied with your order. This is why you can rely on our fair return policy. </p>
    <h3>30-day Return Guarantee</h3>
    <p>Simply return your product within 30 days of receiving your order for any return or exchange needs. If it doesn’t fit or you don’t like it, just let us know and we can find a solution together. We can offer you the following return options:</p>
    <ul>
      <li class="py-3">Exchange for a new product.</li>
      <li>Exchange store credit which can be redeemed towards your next order.</li>
    </ul>
    <p>Refunding the purchase price is possible as long as you didn’t personalize the product yourself. </p>
    <h3>Easy Returns</h3>
    <ul>
      <li class="py-3">Open your delivery confirmation or your Binco account </li>
      <li>Click on “Returns”</li>
      <li class="py-3">Select a reason for your return and choose a Return option</li>
    </ul>
    <h3>“The small print”</h3>
    <p>Returns are usually processed within 7 days. We are unable to process returns sent to us without prior notification in the “Returns” section of your account or delivery confirmation. </p>
    <p>Our satisfaction guarantee exists in addition to your legal rights, including right of withdrawal and warranty claims. You can find further information in our Terms & Conditions. </p>
    </div>
    </>
    )
  }
}
