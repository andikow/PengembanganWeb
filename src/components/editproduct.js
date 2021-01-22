import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'
import { Link } from 'react-router-dom';

export default class Profil extends React.Component {

  constructor() {
    super();
    this.state = {
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

  editProduct() {
    var data = {
      ProductID: this.props.match.params.productid,
      Name: this.state.Name,
      Price: this.state.Price,
      CategoryID: this.state.CategoryID,
      Description: this.state.Description,
      PictureLink1: this.state.PictureLink1,
      PictureLink2: this.state.PictureLink2,
      PictureLink3: this.state.Picturelink3
    }

    fetch(
      'http://localhost:8000/editproduct/' + data.ProductID ,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then(response => response.json())
      // .then(alert('New product successfully added!'))
  }

  getProductHeader(){
    var productid = this.props.match.params.productid
    fetch ('http://localhost:8000/editproduct/' + productid)
    .then(response => response.json())
    .then(res => {
      this.setState({Name: res[0].Name })
      this.setState({Price: res[0].Price })
      this.setState({CategoryID: res[0].CategoryID })
      this.setState({Description: res[0].Description})
      this.setState({PictureLink1: res[0].PictureLink1 })
      this.setState({PictureLink2: res[0].PictureLink2})
      this.setState({PictureLink3: res[0].PictureLink3})
    })   
  }

  componentDidMount(){
    this.getProductHeader()
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
                            <input type="text" className="form-control" style={{ width: 300 }} value={ this.props.match.params.productid} placeholder="ProductID" disabled/>
                          </div>
                        </form>
                        <br />
                        <form>
                          <div>
                            <label>Name</label>
                            <input type="text" onChange={ev=> this.setState({Name: ev.target.value})} value={this.state.Name} className="form-control" style={{ width: 300 }} placeholder="Name" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>Price</label>
                            <input type="text" onChange={ev=> this.setState({Price: ev.target.value})} value={this.state.Price} className="form-control" style={{ width: 300 }} placeholder="Price" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>Category</label>
                            <input type="text" onChange={ev=> this.setState({CategoryID: ev.target.value})} value={this.state.CategoryID} className="form-control" style={{ width: 300 }} placeholder="Category" />
                          </div>
                        </form><br />
                      </div>
                      <div class="col">
                        <form>
                          <div>
                            <label>Description</label>
                            <input type="text" onChange={ev=> this.setState({Description: ev.target.value})} value={this.state.Description} className="form-control" style={{ width: 300 }} placeholder="Description" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink1</label>
                            <input type="text" onChange={ev=> this.setState({PictureLink1: ev.target.value})} value={this.state.PictureLink1} className="form-control" style={{ width: 300 }} placeholder="PictureLink1" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink2</label>
                            <input type="text" onChange={ev=> this.setState({PictureLink2: ev.target.value})} value={this.state.PictureLink2} className="form-control" style={{ width: 300 }} placeholder="PictureLink2" />
                          </div>
                        </form><br />
                        <form>
                          <div>
                            <label>PictureLink3</label>
                            <input type="text" onChange={ev=> this.setState({PictureLink3: ev.target.value})} value={this.state.PictureLink3} className="form-control" style={{ width: 300 }} placeholder="PictureLink3" />
                          </div>
                        </form>
                        <br />
                        <br />
                        <Link to="/admin/product">
                          <button onClick={()=>this.editProduct()} className="btn btn-danger my-0 font-weight-bold ml-auto mr-4 float-right" type="button">Save Change</button>
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
