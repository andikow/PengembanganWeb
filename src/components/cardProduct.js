import React from 'react';
import '../assets/css/cardProduct.css';
import Produk1 from '../assets/img/productex1.jpg'
import {Link} from 'react-router-dom';

export default class CardProduct extends React.Component{

  render(){

    return(
    <>
        <div className="card card-hover" style={{width: '18rem'}}>
            <img className="card-img-top" src={Produk1} alt="Product Example" width="100px" height="300px" />
            <span class="uk-card-badge span-fav ml-2 mt-2 mr-2" style={{position: "absolute", right: 0}}><i className="far fa-2x fa-heart"></i></span>
            <div className="card-body">
                <h5 class="card-title">Product Example 1</h5>
                <p class="card-text">Product Example 1 Name</p>
                <p class="card-text text-primary font-weight-bold">Rp 100.000</p>
            </div>
        </div>
    </>
    )
  }
}
