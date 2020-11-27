import React from 'react';

export default class About extends React.Component{

  render(){

    return(
    <>
        <div className="row d-flex align-content-center flex-wrap bg-primary" style={{height:"50px"}}>
          <div className="col-lg-5">
            <button type="button" className="col-lg-12 no-gutters btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i className = "fal fa-acorn"></i>Tooltip on right
            </button>
          </div>
          <div className="offset-lg-2"></div>

          <div className="col-lg-5 d-flex align-content-center flex-wrap">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active text-white" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>

        </div>
        <div className="row d-flex align-content-center flex-wrap bg-light" style={{height:"100px"}}>
          <div className="container">

            <button type="button" className="btn btn-sm btn-info mr-2">
              <i class="fal fa-shopping-bag fa-fw"></i>Start Selling
            </button>

          </div>
        </div>
    </>
    )
  }
}