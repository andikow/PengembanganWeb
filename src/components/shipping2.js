import React from 'react';
import './../assets/css/help.css';


export default class Shipping extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Express Shipping</h2><br/>
    <h3>Express to US destinations</h3>
    <p>We offer an Express Shipping option for delivery to the 48 contiguous states. Your order will enter production the business day following your order and will take 1 business day to be produced and shipped out. Once the Express Shipping order leaves our facility, it will be delivered on the following business day.</p>
    <h3>Express to International destinations</h3>
    <p>We offer International Express shipping for most of our International destinations. Orders will enter production the business day following your order and take 1-2 business days to be produced and shipped out. Delivery is typically within 1-3 business days once the order has been shipped. Please note, customs and duties may be due upon arrival. Learn more in our shipping times and costs article.</p>
    <h3>Upgrade Express shipping</h3>
    <p>If you would like to upgrade an existing order to a faster shipping method, please get in touch with us before your order begins production or cancel the order and place a new one with the upgraded shipping method.</p>
    <h3>Possible reasons for a delayed delivery:</h3>
    <ul>
      <li class="py-3">The delivery address is in a location that’s hard to reach (e.g. mountains, islands or remote areas). If this should be the case, delivery may take up to 5 days.</li>
      <li>It will take an extra day if there is a public holiday in any of the countries that handle delivery.</li>
      <li class="py-3">Customs and duties are due for the order and must be paid prior to delivery.</li>
      <li>You have placed a large order. Please refer to the calculated delivery time in the checkout section for information on the estimated time of delivery.</li>
    </ul>
    <h3>Costs for express delivery</h3>
    <p>Costs for express deliveries vary depending on the country of delivery. Get more detailed information in our article on delivery times and costs by selecting the delivery country in the menu. If you don’t find any indication of express deliveries to the country in question, please get in touch with our Service Team. We’ll be glad to find a tailor-made solution for you. </p>
    </div>
    </>
    )
  }
}
