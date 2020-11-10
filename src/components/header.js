import React from 'react';

export default class About extends React.Component{

  render(){

    return(
    <>
        <div className="row d-flex align-content-center flex-wrap bg-dark" style={{height:"50px"}}>
          <div className="col-lg-5">
            <button type="button" className="col-lg-12 no-gutters btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i className = "fal fa-acorn"></i>Tooltip on right
            </button>
          </div>
          <div className="offset-lg-2"></div>
          <div className="col-lg-5 d-flex align-content-center flex-wrap">
            <button type="button" className="btn btn-sm btn-light mr-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i class="fal fa-shopping-bag fa-fw"></i>Start Selling
            </button>
            <button type="button" className="btn btn-sm btn-light mr-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i class="fal fa-shopping-bag fa-fw"></i>Jobs
            </button>
            <i class="fal fa-horizontal-rule fa-rotate-90 mr-2"></i>
            <button type="button" className="btn btn-sm btn-outline-light mr-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i class="fal fa-question-circle fa-fw"></i>Help
            </button>
            <button type="button" className="btn btn-sm btn-light mr-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i class="fal fa-user fa-fw"></i>Login
            </button>
          </div>
        </div>
        <div className="row d-flex align-content-center flex-wrap bg-light" style={{height:"100px"}}>
          <div className="container">

            <button type="button" className="btn btn-sm btn-info mr-2" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
              <i class="fal fa-shopping-bag fa-fw"></i>Start Selling
            </button>
            
          </div>
        </div>
    </>
    )
  }
}
