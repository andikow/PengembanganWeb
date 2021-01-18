import React from 'react';
import './../assets/css/help.css';
import {Link} from 'react-router-dom';


export default class Help extends React.Component{

  render(){

    return(
    <>
    <div class="content">
      <h2 style={{textAlign:'center', paddingBottom:80}}>Help Pages for Customers</h2>
      <div class="row">
        <div class="col">
          <h4>Payment & Prices</h4>
          <ul>
            <li class="py-3"><Link to="/payment1">Printing Costs for Customized Products by Binco</Link></li>
            <li><Link to="/payment2">Payment Methods</Link></li>
          </ul>
        </div>

        <div class="col">
          <h4>Orders</h4>
          <ul>
            <li class="py-3"><Link to="/order1">Finding the Right Size</Link></li>
            <li><Link to="/order2">Exchanges and Returns</Link></li>
            <li class="py-3"><Link to="/order3">Order Status</Link></li>
          </ul>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <h4>Shipping & Delivery</h4>
          <ul>
            <li class="py-3"><Link to="/shipping1">Shipping Times and Costs</Link></li>
            <li><Link to="/shipping2">Express Shipping</Link></li>
          </ul>
        </div>
        <div class="col">
          <h4>Start Creating</h4>
          <ul>
            <li class="py-3"><Link to="/creating1">Printing Techniques</Link></li>
            <li><Link to="/creating2">Differences in Colors: Monitor vs. T-Shirt</Link></li>
          </ul>
        </div>
      </div>
    </div>

    </>
    )
  }
}
