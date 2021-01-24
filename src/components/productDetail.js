import React from 'react';
import Produk1 from '../assets/img/productex1.jpg'
import '../assets/css/productDetail.css'
import {Link} from 'react-router-dom';

export default class ProductDetail extends React.Component{

    constructor(props) {
        super(props)
        this.state={
          productDetail : [],
          color : [],
          size : [],
          ProductID : this.props.match.params.id,
          ProdDet: true, SizeChart: false, Reviews: false,
          selectedSize : "",
          selectedColor : ""
        }
        var id = this.props.match.params.id;
        this.getProductDetail(id)
        this.getColor(id)
        this.getSize(id)
      }

      getProductDetail(id) {
        fetch('http://localhost:8000/productdetail/' + id,{
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        .then(response => response.json())
        .then(res => {
          this.setState({
            productDetail : res,
          })
      })
    }

      getColor(id){
        fetch('http://localhost:8000/getcolor/' + id,{
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        .then(response => response.json())
        .then(res => {
          this.setState({
            color : res,
          })
      })
      }

      getSize(id){
        fetch('http://localhost:8000/getsize/' + id,{
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        .then(response => response.json())
        .then(res => {
          this.setState({
            size : res,
          })
      })
      }

      addCart(id) {
      if(this.state.selectedColor === ""){
          alert("Please choose a color")
      }
      else if(this.state.selectedSize === ""){
        alert("Please choose a size")
      }
      else{
        var data = {
          ProductID : id,
          Size : this.state.selectedSize,
          ColorID : this.state.selectedColor
        }

        fetch('http://localhost:8000/cart',
        {
          method : 'POST',
          headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(data)
        }
      ).then(response=> response.json())
      .then(res=>{
        alert('Add to cart completed')
      })
    }
      }

  render(){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
    <>
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-6 col-12">

                {
                  this.state.productDetail.slice(0,1).map((item, index)=>(
                  <>
                <img src={item.PictureLink1} alt="Produk Example 1" style={{width: '100%', paddingRight: "2%"}}/>
                  </>
                  ))
                }
                </div>
                <div className="col-md-6 col-12 py-1">
              {
                this.state.productDetail.slice(0,1).map((item, index)=>(
                <>
                <h2>{item.Name}</h2>
                <p>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                <i className="fas fa-star mr-2"></i>
                (438 reviews)
                </p>
                <h1 className="mt-3">IDR {numberWithCommas(item.Price)}</h1>
                <small>Plus shipping</small>
                </>
                ))
              }
              <p className="mt-3"><b>Color: </b></p>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              {
                this.state.color.map((item, index)=>(
                  <label onClick={() => this.setState({selectedColor: item.ColorID})} className="btn-block btn btn-info border mr-2 rounded-circle m-1 px-4 py-4" style={{backgroundColor: item.ColorID}}>
                    <input type="radio" name="color"/>
                  </label>
                ))
              }
              </div>
              <p><b>Choose a size</b></p>
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              {
                this.state.size.map((item, index)=>(
                  <label onClick={() => this.setState({selectedSize: item.Size})} className={"btn btn-secondary border mr-2 " + this.state.size}>
                    <input type="radio" name="size"/> {item.Size}
                  </label>
                ))
              }
              </div>

              <button onClick={()=>this.addCart(this.state.ProductID)} className="btn btn-block btn-primary text-center mt-2 w-75"><i className="fas fa-shopping-cart mr-2"></i> Add to cart</button>
              <button className="btn border border-primary text-primary text-center w-75 mt-2"><i className="far fa-heart mr-2"></i> Add to favorite</button>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 text-center"><h1>Got this design on other products</h1></div>
                <div className="col-12 text-center">
                    <p>
                        <button className="chooseGender btn border-bottom mr-1"><i className="fas fa-mars mr-2"></i>Men</button>
                        <button className="chooseGender btn border-bottom"><i className="fas fa-venus mr-2" />Women</button>
                    </p>
                </div>
                <div className="col-12 text-center">
                    <p>
                        <button className="btn border border-dark mr-2">Polo Shirt<br/>IDR 87000</button>
                        <button className="btn border border-dark mr-2">Tank Top<br/>IDR 54000</button>
                        <button className="btn border border-dark mr-2">Hoodie<br/>IDR 146000</button>
                    </p>
                </div>
                <div className="col-12 mt-3">
                <div className="subDesc">
                    <div className="subDesc-header d-flex justify-content-between py-3">
                        <div><h4>Product Details</h4></div>
                        <div type="button" onClick={()=>this.setState({ProdDet: !this.state.ProdDet})}><h4><i className="fa fa-plus"/></h4></div>
                    </div>
                    {
                    this.state.ProdDet?
                    <div className="subDesc-body">
                    </div>
                    :null
                    }
                </div>
                <div><hr></hr></div>
                <div className="subDesc">
                    <div className="subDesc-header d-flex justify-content-between py-3">
                        <div><h4>Size Chart</h4></div>
                        <div type="button" onClick={()=>this.setState({SizeChart: !this.state.SizeChart})}><h4><i className="fa fa-plus"/></h4></div>
                    </div>
                    {
                    this.state.SizeChart?
                    <div className="subDesc-body">
                        <div className="row">
                        <div className="col-12 col-md-6">
                        <table className="table table-striped w-100">
                        <thead>
                            <tr>
                            <th scope="col">Size</th>
                            <th scope="col">A (inch)</th>
                            <th scope="col">B (inch)</th>
                            <th scope="col">C (inch)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">S</th>
                            <td>24.21</td>
                            <td>17.48</td>
                            <td>5.98</td>
                            </tr>
                            <tr>
                            <th scope="row">M</th>
                            <td>25.47</td>
                            <td>18.46</td>
                            <td>6.50</td>
                            </tr>
                            <tr>
                            <th scope="row">L</th>
                            <td>26.50</td>
                            <td>19.49</td>
                            <td>6.97</td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>
                                A - Length in inch <br />
                                B - Width in inch <br />
                                C - Length in inch <br />
                            </p>
                        </div>
                        </div>
                    </div>
                    :null
                    }
                </div>
                <div><hr></hr></div>
                <div className="subDesc">
                    <div className="subDesc-header d-flex justify-content-between py-3">
                    <h4>Customer Reviews
                    <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                    <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                    <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                    <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                    <i className="fas fa-star mr-2"></i>
                    (438 reviews)

                    </h4>
                        <div type="button" onClick={()=>this.setState({Reviews: !this.state.Reviews})}><h4><i className="fa fa-plus"/></h4></div>
                    </div>
                    {
                    this.state.Reviews?
                    <div className="subDesc-body">
                        <div className="row">
                        <div className="col-lg-5 col-12">
                            <h5>Filter by rating</h5>
                            <p><button className="btn border border-dark mr-2 mt-2">1 star</button>
                            <button className="btn border border-dark mr-2 mt-2">2 stars</button>
                            <button className="btn border border-dark mr-2 mt-2">3 stars</button>
                            <button className="btn border border-dark mr-2 mt-2">4 stars</button>
                            <button className="btn border border-dark mr-2 mt-2">5 stars</button>
                            </p>
                            <h5>Filter by size</h5>
                            <p><button className="btn border border-dark mr-2 mt-2">S</button>
                            <button className="btn border border-dark mr-2 mt-2">M</button>
                            <button className="btn border border-dark mr-2 mt-2">L</button>
                            <button className="btn border border-dark mr-2 mt-2">XL</button>
                            <button className="btn border border-dark mr-2 mt-2">2XL</button>
                            </p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <p className="mt-2">
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i className="fas fa-star mr-2"></i>

                            Color <span className="px-2 rounded-circle bg-dark nl-2 mr-2"></span> Size M <br/> Terrific! <br/><small className="mt-1">2 November 2020</small>
                            </p>
                            <p className="mt-2">
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i className="fas fa-star mr-2"></i>

                            Color <span className="px-2 rounded-circle bg-dark nl-2 mr-2"></span> Size M <br/> Nice! <br/><small className="mt-1">2 December 2020</small>
                            </p>
                            <p className="mt-2">
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i style={{color:"#F5C60D"}} className="fas fa-star"></i>
                            <i className="fas fa-star mr-2"></i>

                            Color <span className="px-2 rounded-circle bg-dark nl-2 mr-2"></span> Size M <br/> Wow! <br/><small className="mt-1">5 January 2021</small>
                            </p>
                        <div className="row justify-content-center">
                            <p className="" aria-label="Page navigation">
                            <ul className="pagination">
                                <li className="page-item"><a class="page-link" href="#">&#60;</a></li>
                                <li className="page-item"><a class="page-link" href="#">1</a></li>
                                <li className="page-item"><a class="page-link" href="#">2</a></li>
                                <li className="page-item"><a class="page-link" href="#">3</a></li>
                                <li className="page-item"><a class="page-link" href="#">&#62;</a></li>
                            </ul>
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                    :null
                    }
                </div>
                <div><hr></hr></div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
