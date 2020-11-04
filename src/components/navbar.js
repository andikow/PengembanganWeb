import React from 'react';

export default class About extends React.Component{

  render(){

    return(
      <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        <i className = "fal fa-acorn"></i>Tooltip on right
      </button>
    )
  }
}
