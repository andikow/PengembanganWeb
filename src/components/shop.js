import React from 'react';
import FilterProduct from './filterProduct.js';
import SortBy from './sortBy.js';
import CardProduct from './cardProduct.js';
import {Link} from 'react-router-dom';

export default class Shop extends React.Component{
    render(){
      return(
        <>
        <div class="container py-4">
          <div class="row py-4">
            <div class="col-lg-3 pl-0">
              <FilterProduct />
            </div>
            <div class="col-lg-9 px-4">
              <div class="row d-flex flex-wrap flex-row-reverse mx-0">
                <SortBy />
              </div>
              <div class="row">
                <CardProduct />
              </div>
            </div>
          </div>
        </div>
        </>
      )
    }
}
