import React from 'react';
import Logo from './../assets/img/logo.png';
import model_custom from './../assets/img/model_custom.png';
import model_shop from './../assets/img/model_shop.png';
export default class Home extends React.Component{

  render(){

    return(
    <>
        <div className="row">
          <div className="col-lg-6 pr-5" style={{left:'-30px'}}>
            <div className="row bg-success">
              {/*Foto Headline Kiri*/}
              <div className="col-lg-6">
                <img src={model_custom} className="float-left" alt="model_custom" width="300px" />
              </div>
              {/*Headline Kiri*/}
              <div className="col-lg-6 bg-success d-flex align-content-center justify-content-center flex-wrap" style={{transform:'skewX(-15deg)',zIndex:'1', left:'40px'}}>
                <div className="row" style={{transform:'skewX(15deg)'}}>
                  <div className="text-center">
                    <h1 className="text-secondary d-flex flex-wrap justify-content-center font-weight-bold">CREATE</h1>
                    <h5 className="text-secondary d-flex flex-wrap justify-content-center mr-5 ml-5">personalized products for any event or occasion</h5>
                  </div>
                  <button type="button" className="btn btn-danger my-0 font-weight-bold btn-block mr-5 ml-5" type="button">Start Designing Now</button>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6" style={{right:'-30px'}}>
            <div className="row bg-warning">
              {/*Headline Kanan*/}
              <div className="col-lg-6 d-flex align-content-center justify-content-center flex-wrap bg-warning" style={{transform:'skewX(-15deg)', right:'40px'}}>
                <div className="row" style={{transform:'skewX(15deg)'}}>
                  <div className="text-center">
                    <h1 className="text-secondary d-flex flex-wrap justify-content-center font-weight-bold">SHOP</h1>
                    <h5 className="text-secondary d-flex flex-wrap justify-content-center mr-4 ml-4 px-2">unique designs on any products by independent designers</h5>
                  </div>
                  <button type="button" className="btn btn-danger my-0 font-weight-bold btn-block mr-5 ml-5" type="button">Find Something You Love</button>
                </div>
              </div>

              {/* Foto Headline Kanan*/}
              <div className="col-lg-6">
                <img src={model_shop} className="float-right" alt="model_custom" width="300px" />
              </div>

            </div>
          </div>

        </div>
    </>
    )
  }
}
