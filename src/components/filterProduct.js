import React from 'react';
import '../assets/css/filterProduct.css'
import {Link} from 'react-router-dom';

export default class FilterProduct extends React.Component{
  constructor() {
    super()
    this.state={
      category : [],
      Description : '',
      Categories: true, Products: true, PriceRange: true, Sizes: true, Colors: true
    }
  }
  componentDidMount(){
      this.getData()
  }

  getData(){
      fetch('http://localhost:8000/shop')
      .then(response => response.json())
      .then(res=>{
          this.setState({
              category : res
          })
      })
      .catch(err=>{
          console.error('Error : ' + err)
      })
  }

  render(){
    return(
    <>
        <div className="filterBar">
          {/*Start Filter Categories*/}
          <div className="subFilter">
            <div className="subFilter-header  d-flex justify-content-between">
              <div><h4>Categories</h4></div>
              <div type="button" onClick={()=>this.setState({Categories: !this.state.Categories})}><h4><i className="fa fa-plus"/></h4></div>
            </div>
            {
              this.state.Categories?
              <div className="subFilter-body">
              <ul>
              {this.state.category.map((item, index)=>(
                <li>{item.Description}</li>
              ))
              }
              </ul>
              </div>
              :null
            }
          </div>
          {/*End Filter Categories*/}

          <div><hr></hr></div>
          {/*Start Filter Price Range*/}
          <div className="subFilter">
            <div className="subFilter-header  d-flex justify-content-between">
              <div><h4>Price Range</h4></div>
              <div type="button" onClick={()=>this.setState({PriceRange: !this.state.PriceRange})}><h4><i className="fa fa-plus"/></h4></div>
            </div>
            {
              this.state.PriceRange?
              <div className="subFilter-body">
                <div className="manualInput mt-4 d-flex justify-content between">
                <div className="input-group-prepend"><span className="input-group-text p-1">Rp</span></div>
                <input className="form-control mr-2" style={{width: "40%"}} placeholder="min."></input>
                <div className="input-group-prepend"><span className="input-group-text p-1">Rp</span></div>
                <input className="form-control " style={{width: "40%"}} placeholder="max."></input>
                </div>
                <div className="rangeInput mt-4 d-flex flex-column">
                  <input type="range"></input>
                </div>
              </div>
              :null
            }
          </div>
          {/*End Filter Price Range*/}
          <div><hr></hr></div>
          {/*Start Filter Sizes*/}
          <div className="subFilter">
            <div className="subFilter-header  d-flex justify-content-between">
              <div><h4>Sizes</h4></div>
              <div type="button" onClick={()=>this.setState({Sizes: !this.state.Sizes})}><h4><i className="fa fa-plus"/></h4></div>
            </div>
            {
              this.state.Sizes?
              <div className="subFilter-body d-flex-column justify-content-around">
                <div className="btn border m-2">S</div>
                <div className="btn border m-2">M</div>
                <div className="btn border m-2">L</div>
                <div className="btn border m-2">XL</div>
                <div className="btn border m-2">XXL</div>
              </div>
              :null
            }
          </div>
          {/*End Filter Sizes*/}
          <div><hr></hr></div>
          {/*Start Filter Colors*/}
          <div className="subFilter">
            <div className="subFilter-header  d-flex justify-content-between">
              <div><h4>Color</h4></div>
              <div type="button" onClick={()=>this.setState({Colors: !this.state.Colors})}><h4><i className="fa fa-plus"/></h4></div>
            </div>
            {
              this.state.Colors?
              <div className="subFilter-body d-flex-column justify-content-around">
                <div className="btn border rounded-circle m-1 px-4 py-4" style={{backgroundColor: "#EA6914"}}></div>
                <div className="btn border rounded-circle m-1 px-4 py-4" style={{backgroundColor: "#1E1E1E"}}></div>
                <div className="btn border rounded-circle m-1 px-4 py-4" style={{backgroundColor: "#007ACC"}}></div>
                <div className="btn border rounded-circle m-1 px-4 py-4" style={{backgroundColor: "#DC4E41"}}></div>
              </div>
              :null
            }
          </div>
          {/*End Filter Colors*/}
          <div><hr></hr></div>
          <div>
            <input classname="form-check-input" type="checkbox" id="safeSearch"/>
            <label className="form-check-label ml-2" htmlFor="safeSearch"><h4>Safe Search</h4></label>
          </div>
          <div className="d-flex justify-content-center mt-3"><button className="btn btn-primary w-75">Apply Filter</button></div>
        </div>

    </>
    )
  }
}
