import React from 'react';
import './../assets/css/help.css';


export default class Payment extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Printing Costs for Customized Products by Binco</h2><br/>
    <p>The price for your Binco product is made up of the product price (ex. a T-Shirt), the printing costs and a Design price, if applicable. The design price is only for community designs and does not apply when you add your own text, upload designs or use designs marked as "free". </p>

    <h3>Here’s how the printing costs are set</h3>
    <p>Every product has at least one print area that you can customize with designs and text. For each print area used, a standard printing fee will apply (see example calculation). Within each print area, you can use as many designs and texts as you like free of charge. Only the standard printing fee will apply.</p>

    <p>For most garments, you can print on several areas, such as the front, back, sleeves or hood. Each additional print area is subject to the standard printing fee. </p>

    <h3>Design prices for community designs</h3>
    <p>In the Create Tool, you’ll find free designs as well as designs from independent designers. These designs are subject to charge. They have a fixed design price which is paid directly to the designer (see example calculation.) If you use the same community design several times on one product, you will only be charged once for it. The design price is shown in the Customize Tool. </p>
    </div>
    </>
    )
  }
}
