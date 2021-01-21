import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'
import { Link } from 'react-router-dom';

export default class Profil extends React.Component {

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
                      <li><Link to="/admin"><span className="fa fa-tachometer-alt"></span> Dashboard</Link></li>
                      <li><Link to="/admin/order1"><span className="fa fa-boxes"></span> Orders</Link></li>
                      <li className="active"><Link to="/admin/product"><span className="fa fa-tshirt"></span> Product</Link></li>
                      <br /><br /><br /><br />
                      <li><Link to="/"><span className="fa fa-sign-out-alt"></span> Logout</Link></li>
                    </ul>
                  </nav>
                </div>

                <div className="content-panel">
                  <div className="content-header-wrapper">
                    <h3 class="ml-4">Edit Product</h3>
                    <br />
                    <div class="row">
                      <div class="col">
                        <form>
                          <div>
                            <label>ProductID</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="ProductID" />
                          </div>
                        </form>
                        <br />
                        <form>
                          <div>
                            <label>Name</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="Name" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>Price</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="Price" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>Category</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="Category" />
                          </div>
                        </form><br />
                      </div>
                      <div class="col">
                        <form>
                          <div>
                            <label>Description</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="Description" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink1</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="PictureLink1" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink2</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="PictureLink2" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink3</label>
                            <input type="text" className="form-control" style={{ width: 300 }} placeholder="PictureLink3" />
                          </div>
                        </form>
                        <br />
                        <br />
                        <Link to="/admin/product">
                          <button className="btn btn-danger my-0 font-weight-bold ml-auto mr-4 float-right" type="button">Save Change</button>
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
