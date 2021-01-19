import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'
import {Link} from 'react-router-dom';

export default class Profil extends React.Component{

  constructor(){
    super();
    this.state = {
      productHeader : []
    }
  }

  getProductHeader(){
    fetch ('http://localhost:8000/productheader')
    .then(response => response.json())
    .then(res => {
      this.setState({
        productHeader: res
      })
    })
  }

  componentDidMount(){
    this.getProductHeader()
  }

  render(){

    return(
    <>
    <div className="content px-0">
        <div className="view-account">
            <section className="module">
                <div className="module-inner">
                    <div className="side-bar">
                        <div className="user-info">
                            <h3 style={{color:'#63BCC9'}}>Admin</h3>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li><Link to ="/admin"><span className="fa fa-tachometer-alt"></span> Dashboard</Link></li>
                                <li><Link to ="/admin/order1"><span className="fa fa-boxes"></span> Orders</Link></li>
                                <li className="active"><Link to ="/admin/product"><span className="fa fa-tshirt"></span> Product</Link></li>
                                <br/><br/><br/><br/>
                                <li><Link to ="/"><span className="fa fa-sign-out-alt"></span> Logout</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                          <div class="row">
                          <Link to ="/admin/addproduct">
                              <button className="btn btn-danger my-0 font-weight-bold" type="button"><span><i class="fas fa-plus"></i></span>&emsp;Add new products</button>
                              </Link>
                              <div class=" pt-4 col-md-12">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table class="table">
                                        <thead class="text-center text-primary">
                                          <th style={{width:100}}>
                                            Picture
                                          </th>
                                          <th>
                                            ProductID
                                          </th>
                                          <th>
                                            Name
                                          </th>
                                          <th>
                                            Price
                                          </th>
                                          <th>
                                            Category
                                          </th>
                                          <th>
                                            Description
                                          </th>
                                          <th>
                                            PictureLink1
                                          </th>
                                          <th>
                                            PictureLink2
                                          </th>
                                          <th>
                                            PictureLink3
                                          </th>
                                          <th>
                                            Action
                                          </th>
                                        </thead>
                                        <tbody class="text-center">
                                        {
                                          this.state.productHeader.map((item, index)=>(
                                            <tr key={index}>
                                              <td>{item.PictureLink1}</td>
                                              <td>{item.ProductID}</td>
                                              <td>{item.Name}</td>
                                              <td>{item.Price}</td>
                                              <td>{item.CategoryID}</td>
                                              <td>{item.Description}</td>
                                              <td>{item.PictureLink1}</td>
                                              <td>{item.PictureLink2}</td>
                                              <td>{item.PictureLink3}</td>
                                              <td><Link to ="/admin/editproduct">
                                              <p class="font-weight-bold" style={{color:'#63BCC9', width:50}}><i class="fas fa-edit"></i> Edit</p>
                                              </Link></td>
                                            </tr>
                                          ))
                                        }
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
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
