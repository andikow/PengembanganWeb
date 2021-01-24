import React from 'react';
import '../assets/css/cardProduct.css';
import Produk1 from '../assets/img/productex1.jpg'
import {Link} from 'react-router-dom';

export default class CardProduct extends React.Component{
  constructor() {
    super()
    this.state={
      productheader : [],
      Name : '', Price : '', Description : '', PictureLink1 : '',

    }
  }
  componentDidMount(){
      this.getData()
  }

  getData(){
      fetch('http://localhost:8000/shop',{
        method : 'POST'
      })
      .then(response => response.json())
      .then(res=>{
          this.setState({
              productheader : res
          })
      })
      .catch(err=>{
          console.error('Error : ' + err)
      })
  }
  render(){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
    <>

        {this.state.productheader.map((item, index)=>(
          <div class="col-lg-4 my-2">
          <Link to={"/productdetail/" + item.ProductID}>
            <div className="card card-hover">
              <img className="card-img-top" src={item.PictureLink1} alt="Product Example" width="100px" height="250px"/>
              <span class="uk-card-badge span-fav ml-2 mt-2 mr-2" style={{position: "absolute", right: 0}}>
                <i className="far fa-2x fa-heart"></i>
              </span>
              <div className="card-body">
                <h5 class="card-title text-truncate">{item.Name}</h5>
                <p class="card-text text-primary font-weight-bold">IDR {numberWithCommas(item.Price)}</p>
              </div>
            </div>
            </Link>
          </div>
          ))
          }

      </>
    )
  }
}
