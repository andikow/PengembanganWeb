import React from 'react';
import './../assets/css/about.css';
import photo from './../assets/img/aboutus.png';
import {Link} from 'react-router-dom';

export default class About extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2 style={{textAlign:'center'}}>About Us</h2><br/>
    <img src={photo} alt="photo" width="100%" /><br/><br/>
    <p style={{textAlign:'center'}}>A global platform for personalized clothing and accessories, we are the go-to-place for anyone looking to realize their creative ideas on quality fabrics. We value freedom of expression, whether it’s with your own designs or those made available by our community. T-shirts, sweaters, bags, aprons and a lot more can easily be personalized with images and custom text. Moreover, Binco is an ideal custom merchandise partner: Emerging YouTube stars and a large number of large companies and brands are among our esteemed customers. Our top-quality prints, custom t-shirts and services will make sure that your business hits it big.</p>
    </div>
    </>
    )
  }
}
