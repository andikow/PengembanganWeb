import React from 'react';

export default class SortBy extends React.Component{

  render(){

    return(
    <>
        <div>
            <span>Sort by: </span>
            <span type="button">Revelance</span>
            <span> | </span>
            <span type="button">Newest</span>
        </div>
    </>
    )
  }
}
