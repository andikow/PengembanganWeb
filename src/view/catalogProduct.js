import React from 'react';
import CardProduct from '../components/cardProduct/cardProduct';
import FilterProduct from '../components/filterProduct/filterProduct';
import SortBy from '../components/sortBy';

export default class CatalogProduct extends React.Component{

  render(){

    return(
    <>
        <div>          
          <div className="row">
          <div className="col-md-3">
            <FilterProduct/>
          </div>          
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 offset-md-8">
              <SortBy />
              </div>
            </div>
            <div className="row mt-3">
              <CardProduct />
            </div>            
          </div>
          </div>          
        </div>
    </>
    )
  }
}
