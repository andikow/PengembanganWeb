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
            <li class="py-3"><a href="#">Printing Costs for Customized Products by Binco</a></li>
            <li><a href="#">Payment Methods</a></li>
          </ul>
        </div>

        <div class="col">
          <h4>Orders</h4>
          <ul>
            <li class="py-3"><a href="#">Finding the Right Size</a></li>
            <li><a href="#">Exchanges and Returns</a></li>
            <li class="py-3"><a href="#">Order Status</a></li>
          </ul>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <h4>Shipping & Delivery</h4>
          <ul>
            <li class="py-3"><a href="#">Shipping Times and Costs</a></li>
            <li><a href="#">Express Shipping</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Start Creating</h4>
          <ul>
            <li class="py-3"><a href="#">Printing Techniques</a></li>
            <li><a href="#">Differences in Colors: Monitor vs. T-Shirt</a></li>
          </ul>
        </div>
      </div>
    </div>

    </>
    )
  }
}
