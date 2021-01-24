import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'
import { Link } from 'react-router-dom';

export default class Profil extends React.Component {

    constructor() {
        super();
        this.state = {
            ColorList: [],
            ProductID: 0,
            ColorID: 0,
            Size: '',
            Qty: 0
        }
    }

    getColorList() {
        fetch('http://localhost:8000/admin/colorlist')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    ColorList: res
                })
            })
    }

    editProductDetail() {
        var data = {
            ColorID: this.state.ColorID,
            Size: this.state.Size,
            Qty: this.state.Qty
        }

        fetch(
            'http://localhost:8000/admin/editproductdetail/' + this.props.match.params.productid,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(data)
            }
        ).then(respons => respons.json())
            .then(alert('Product variation successfully edited!'))
    }

    getProductDetail() {
        var productid = this.props.match.params.productid
        fetch('http://localhost:8000/admin/editproductdetail/' + productid)
            .then(response => response.json())
            .then(res => {
                this.setState({ ColorID: res[0].ColorID })
                this.setState({ Size: res[0].Size })
                this.setState({ Qty: res[0].Qty })
            })
    }

    componentDidMount() {
        this.getProductDetail()
        this.getColorList()
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
                                                        <label>Product ID</label>
                                                        <input type="text" className="form-control" style={{ width: 300 }} value={this.props.match.params.productid} placeholder="ProductID" disabled />
                                                    </div>
                                                </form>
                                                <br />
                                                <form>
                                                    <div>
                                                        <label>Color ID</label>
                                                        <input type="text" onChange={ev => this.setState({ ColorID: ev.target.value })} value={this.state.ColorID} className="form-control" style={{ width: 300 }} placeholder="Color ID" disabled/>
                                                    </div>
                                                </form><br />
                                                <form>
                                                    <div>
                                                        <label>Size</label>
                                                        <input type="text" onChange={ev => this.setState({ Size: ev.target.value })} value={this.state.Size} className="form-control" style={{ width: 300 }} placeholder="Size" disabled/>
                                                    </div>
                                                </form><br />
                                                <form>
                                                    <div>
                                                        <label>Qty</label>
                                                        <input type="text" onChange={ev => this.setState({ Qty: ev.target.value })} value={this.state.Qty} className="form-control" style={{ width: 300 }} placeholder="Qty"/>
                                                    </div>
                                                </form><br />
                                                <Link to={"/admin/productdetail/" + this.props.match.params.productid}>
                                                    <button onClick={() => this.editProductDetail()} className="btn btn-danger my-0 font-weight-bold ml-auto mr-4 float-right" type="button">Save Change</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <div class=" pt-4 col-md-12">
                                                    <div class="card">
                                                        <div class="card-header bg-color-transparent">
                                                            <h5 class="card-title">Product Detail</h5>
                                                        </div>
                                                        <div class="card-body">
                                                            <div class="table-responsive">
                                                                <table class="table">
                                                                    <thead class="text-center text-primary">
                                                                        <th>
                                                                            Color ID
                                                                         </th>
                                                                        <th>
                                                                            Color Name
                                                                        </th>
                                                                    </thead>
                                                                    <tbody class="text-center">
                                                                        {
                                                                            this.state.ColorList.map((item, index) => (
                                                                                <tr key={index}>
                                                                                    <td>{item.ColorID}</td>
                                                                                    <td>{item.ColorName}</td>
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
                            </div>
                        </section>
                    </div>
                </div>

            </>
        )
    }
}
