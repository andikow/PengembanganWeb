import React from 'react';
import './../assets/css/myorder.css'
import {Link} from 'react-router-dom';
import Loading from './loading.js';

export default class MyOrder extends React.Component{
  constructor() {
    super()
    this.state = {
      order : [],
      orderID :'',
      orderDate : '',
      Total : ''
    }
  }
  getOrder() {
    fetch('http://localhost:8000/profil/order/',
    {
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        order : res
      })
    })
    .catch(err=>{
      console.error('Error : ' + err)
    })
  }
  componentDidMount(){
      this.getOrder()
  }
  render(){
    function StatusDesc(statusID){
      if (statusID == 1){
        return "NOT YET PAID"
      }
      else if (statusID == 2)
      {
        return "PACKED"
      }
      else if (statusID == 3)
      {
        return "SHIPPING"
      }
      else if (statusID == 4)
      {
        return "FINISH"
      }
    }
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
    <>
    <Loading/>
    <div className="content">
      <div className="container">

          <h2>My Orders</h2>
          <br/>

          <div className="row pt-2">

            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Order ID</p>
            </div>

            <div className="col-lg-4">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Status</p>
            </div>

            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Order date</p>
            </div>

            <div class="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Qty</p>
            </div>

            <div className="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>Price</p>
            </div>

            <div class="col">
              <p className="d-flex flex-wrap justify-content-center" style={{fontWeight:'bold'}}>More info</p>
            </div>

          </div>

          <hr/>
          {
            this.state.order.map((item, index)=>(
            <div className="row pt-2">

              <div className="col d-flex flex-wrap justify-content-center align-content-center">
                <p>{"ID000" + item.OrderID}</p>
              </div>

              <div className="col-lg-4 d-flex flex-wrap justify-content-center align-content-center">
              <i className="fa fa-credit-card"></i><p> &emsp; {StatusDesc(item.StatusID)}</p>
              </div>

              <div className="col d-flex flex-wrap justify-content-center align-content-center">
                <p>{item.OrderDate}</p>
              </div>

              <div className="col d-flex flex-wrap justify-content-center align-content-center">
                <p>1</p>
              </div>

              <div className="col d-flex flex-wrap justify-content-center align-content-center">
                <p>IDR {numberWithCommas(item.Total)}</p>
              </div>

              <div className="col d-flex flex-wrap justify-content-center align-content-center">
                <Link to={"/orderdetail/" + item.OrderID}>
                  <button type="button" className="btn btn-outline-primary">Details</button>
                </Link>
              </div>

            </div>
            ))
          }



      </div>
    </div>
    </>
    )
  }
}
