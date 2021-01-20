import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'
import { Link } from 'react-router-dom';
import { post } from 'jquery';

export default class Profil extends React.Component {

  constructor() {
    super();
    this.state = {
      // Category: [],
      ProductID: 0,
      Name: '',
      Price: 0,
      CategoryID: 0,
      Description: '',
      PictureLink1: '',
      PictureLink2: null,
      PictureLink3: null,

    }
  }

  getCategory() {
    fetch('http://localhost:8000/addproduct')
      .then(response => response.json())
      .then(res => {
        this.setState({
          Category: res
        })
      })
  }

  componentDidMount() {
    this.getCategory()
  }

  // changeValue(categoryID){
  //   this.setState ({CategoryID: categoryID})
  // } 

  addProduct(){
    var data = {
      ProductID: this.state.ProductID,
      Name: this.state.Name,
      Price: this.state.Price,
      CategoryID: this.state.CategoryID,
      Description: this.state.Description,
      PictureLink1: this.state.PictureLink1,
      PictureLink2: this.state.PictureLink2,
      PictureLink3: this.state.picturelink3
    }

    fetch(
      'http://localhost:8000/addproduct', 
      {
        method : 'POST', 
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(data)
      }
    ).then(respons => respons.json())
    .then(alert('New product successfully added!'))
  }

  render() {

    return (
      <>
        <div className="content">
          <div className="view-account">
            <section className="module">
              <div className="module-inner">
                <div className="side-bar">
                  <div className="user-info">
                    <h3 style={{ color: '#63BCC9' }}>Admin</h3>
                  </div>
                  <nav className="side-menu">
                    <ul className="nav">
                      <li><a href="#"><span className="fa fa-tachometer-alt"></span> Dashboard</a></li>
                      <li><a href="#"><span className="fa fa-boxes"></span> Orders</a></li>
                      <li className="active"><a href="#"><span className="fa fa-tshirt"></span> Product</a></li>
                      <br /><br /><br /><br />
                      <li><a href="#"><span className="fa fa-sign-out-alt"></span> Logout</a></li>
                    </ul>
                  </nav>
                </div>

                <div className="content-panel">
                  <div className="content-header-wrapper">
                    <h3 class="ml-4">Add New Products</h3>
                    <br />
                    <div class="row">
                      <div class="col">
                        <div class="form-group">
                          <label>Upload Image</label>
                          <div class="input-group">
                            <span class="input-group-btn">
                              <span class="btn btn-default btn-file">
                                Browse… <input type="file" id="imgInp" />
                              </span>
                            </span>
                            <input type="text" class="form-control" readonly />
                          </div>
                          <br />
                          <img id='img-upload' />
                        </div>
                      </div>
                      <div class="col">
                        <form>
                          <div>
                            <label>ProductID</label>
                            <input type="text" disabled="disabled" className="form-control" style={{ width: 300 }} placeholder="ProductID" />
                          </div>
                        </form>
                        <br />
                        <form>
                          <div>
                            <label>Name</label>
                            <input onChange = {ev => this.setState({Name : ev.target.value})} type="text" className="form-control" style={{ width: 300 }} placeholder="Name" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>Price</label>
                            <input onChange = {ev => this.setState({Price: ev.target.value})} type="text" className="form-control" style={{ width: 300 }} placeholder="Price" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>Category ID</label>
                            <input onChange = {ev => this.setState({CategoryID: ev.target.value})} type="text" className="form-control" style={{ width: 300 }} placeholder="Category ID 1-8" />

                            {/* <select onClick = {(e) => this.changeValue()}class="custom-select" id="SelectCategory">
                              <option selected>Choose...</option>
                              {
                                this.state.Category.map((item, index) => (
                                  <option value={item.CategoryID}>{item.Description}</option>
                                ))
                              }
                            </select> */}
                            {/* <button type="button" className="btn btn-outline-primary dropdown-toggle" style={{ width: 300 }} data-toggle="dropdown" aria-expanded="false">Choose Category</button>
                            <div class="dropdown-menu">
                              {
                                this.state.Category.map((item, index) => (
                                  <button onClick = {(e)=>this.changeValue (item.CategoryID)} className="dropdown-item">{item.Description}</button>
                                ))
                              }
                            </div> */}

                          </div>
                        </form><br />
                      </div>
                      <div class="col">
                        <form>
                          <div>
                            <label>Description</label>
                            <input onChange = {ev => this.setState({Description : ev.target.value})} type="text" className="form-control" style={{ width: 300 }} placeholder="Description" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink1</label>
                            <input onChange = {ev => this.setState({PictureLink1 : ev.target.value})} type="text" className="form-control" style={{ width: 300 }} placeholder="PictureLink1" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink2</label>
                            <input onChange = {ev => this.setState({PictureLink2 : ev.target.value})}type="text" className="form-control" style={{ width: 300 }} placeholder="PictureLink2" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink3</label>
                            <input onChange = {ev => this.setState({PictureLink3 : ev.target.value})} type="text" className="form-control" style={{ width: 300 }} placeholder="PictureLink3" />
                          </div>
                        </form>
                        <br />
                        <br />
                        <Link to="/admin/product">
                          <button onClick = {()=> this.addProduct()} className="btn btn-danger my-0 font-weight-bold ml-auto mr-4 float-right" type="button">Add product</button>
                        </Link>
                      </div>
                    </div>
                    


                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </>
    )
  }
}
