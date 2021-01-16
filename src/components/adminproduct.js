import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'

export default class Profil extends React.Component{

  render(){

    return(
    <>
    <div className="content">
        <div className="view-account">
            <section className="module">
                <div className="module-inner">
                    <div className="side-bar">
                        <div className="user-info">
                            <h3 style={{color:'#63BCC9'}}>Admin</h3>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li><a href="#"><span className="fa fa-tachometer-alt"></span> Dashboard</a></li>
                                <li><a href="#"><span className="fa fa-boxes"></span> Orders</a></li>
                                <li className="active"><a href="#"><span className="fa fa-tshirt"></span> Product</a></li>
                                <br/><br/><br/><br/>
                                <li><a href="#"><span className="fa fa-sign-out-alt"></span> Logout</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                          <div class="row">
                              <button className="btn btn-danger my-0 font-weight-bold ml-auto" type="button"><span><i class="fas fa-plus"></i></span>&emsp;Add new products</button>
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
                                          <tr>
                                            <td>
                                              <img src={photo} alt="photo" width="100%" /><br/><br/>
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              <p class="font-weight-bold" style={{color:'#63BCC9', width:50}}><i class="fas fa-edit"></i> Edit</p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <img src={photo} alt="photo" width="100%" /><br/><br/>
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              a
                                            </td>
                                            <td>
                                              <p class="font-weight-bold" style={{color:'#63BCC9', width:50}}><i class="fas fa-edit"></i> Edit</p>
                                            </td>
                                          </tr>

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
