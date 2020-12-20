import React from 'react';
import Logo from './../assets/img/logo.png';
import model_custom from './../assets/img/model_custom.png';
import model_shop from './../assets/img/model_shop.png';
import banner_left1 from './../assets/img/ugly_xmas_small.webp';
import banner_left2 from './../assets/img/NA_Facemask_small.webp';
import banner_left3 from './../assets/img/couples_small_na.jpg';
import banner_left4 from './../assets/img/winter_small.webp';
import banner_right1 from './../assets/img/905x332_big_tile_stickers.jpg';
import banner_right2 from './../assets/img/HarryPotter_Startpage.jpg';
import './../assets/css/header.css';
export default class Home extends React.Component{

  render(){

    return(
    <>
        <div className="row no-gutters headline">
          <div className="col-lg-5 bg-success">
            <div className="row">
              {/*Foto Headline Kiri*/}
              <div className="col-lg-6">
                <img src={model_custom} className="float-left" alt="model_custom" width="300px" />
              </div>
              {/*Headline Kiri*/}
              <div className="col-lg-6 bg-success d-flex align-content-center flex-wrap" style={{transform:'skewX(-15deg)', left:'80px'}}>
                <div className="row" style={{transform:'skewX(15deg)', position:'relative', left:'-50px'}}>
                  <div className="text-center">
                    <h1 className="text-secondary font-weight-bold">CREATE</h1>
                    <h5 className="text-secondary mr-2 ml-2">personalized products for any event or occasion</h5>
                  </div>
                  <button className="btn btn-danger font-weight-bold btn-block mr-2 ml-2">Start Designing Now</button>
                </div>
              </div>
            </div>

          </div>
          <div className="offset-lg-2 col-lg-5 bg-warning">
            <div className="row">
              {/*Headline Kanan*/}
              <div className="col-lg-6 bg-warning d-flex align-content-center flex-wrap" style={{transform:'skewX(-15deg)', right:'80px'}}>
                <div className="row" style={{transform:'skewX(15deg)', position:'relative', right:'-50px'}}>
                  <div className="text-center">
                    <h1 className="text-secondary font-weight-bold">SHOP</h1>
                    <h5 className="text-secondary mr-2 ml-2">unique designs on any products by independent designers</h5>
                  </div>
                  <button className="btn btn-danger font-weight-bold btn-block mr-2 ml-2">Find Something You Love</button>
                </div>
              </div>

              {/* Foto Headline Kanan*/}
              <div className="col-lg-6">
                <img src={model_shop} className="float-right" alt="model_custom" width="300px" />
              </div>

            </div>
          </div>
        </div>

        <div id ="homepage-tabs" className="row no-gutters bg-gray">
          <ul class="nav nav-pills d-flex flex-wrap align-items-center">
            <div class="col bg-danger pl-3 py-2" style={{transform:'skewX(-15deg)', marginLeft:'-0.5rem'}}>
              <li className="col-lg-auto font-weight-bold ml-5 nav-link nav-title" style={{transform:'skewX(15deg)'}}>Create Now</li>
            </div>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#" ><i className = "fal fa-gift fa-lg mr-2"></i>Christmas gifts</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> T-shirts</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> Corporate Clothing</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> Photo Gifts</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> Hoodies & Sweatshirts</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> Tank Tops</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> Baby Clothing</a></li>
              <li class="nav-item col-lg-auto"><a class="nav-link" href="#"> Aprons</a></li>
          </ul>
        </div>

        <div className="row no-gutters mt-5">
          <div className="row col-lg-12 d-flex justify-content-center">
            <h3>Trending Now</h3>
          </div>
          <div className="row m-auto d-flex justify-content-center pb-3">
            <div className="col-lg-5 d-flex flex-wrap">
              <div className="row float-right parent d-flex align-items-start">
                <img className ="hvr-grow img-fluid" src={banner_left1} alt="banner_left1" />
              </div>
              <div className="row float-right parent d-flex align-items-end">
                <img className ="hvr-grow" src={banner_left2} alt="banner_left2" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row float-right parent">
                <img className ="hvr-grow" src={banner_right1} alt="banner_right1" />
              </div>
            </div>
          </div>
          <div className="row m-auto d-flex justify-content-center pb-3">
            <div className="col-lg-5 d-flex flex-wrap">
              <div className="row float-right parent d-flex align-items-start">
                <img className ="hvr-grow" src={banner_left3} alt="banner_left3" />
              </div>
              <div className="row float-right parent d-flex align-items-end">
                <img className ="hvr-grow" src={banner_left4} alt="banner_left4" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row float-right parent">
                <img className ="hvr-grow" src={banner_right2} alt="banner_right2" />
              </div>
            </div>
          </div>

        </div>
    </>
    )
  }
}
