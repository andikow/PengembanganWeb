import React from 'react';
import './../assets/css/admin.css'
import { Link } from 'react-router-dom';

export default class Profil extends React.Component {

    constructor() {
        super();
        this.state = {
            productDetail: []
        }
    }

    getProductDetail() {
        var productid = this.props.match.params.productid
        fetch('http://localhost:8000/admin/productdetail/' + productid)
            .then(respons => respons.json())
            .then(res => {
                this.setState({
                    productDetail: res
                })
                console.log(res)
            })
    }

    componentDidMount() {
        this.getProductDetail()
    }

    render() {

        return (
            <>
                <div className="content px-0">
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
                                        <div class="row">
                                            <div class="col-12">
                                                <h4>Product ID: {this.props.match.params.productid}</h4>
                                            </div>
                                            <br />
                                            <Link to={"/admin/addproductdetail/" + this.props.match.params.productid}>
                                                <button className="btn btn-danger my-0 font-weight-bold" type="button"><span><i class="fas fa-plus"></i></span>&emsp;Add Product Variation</button>
                                            </Link>
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
                                                                        Color
                                                                    </th>
                                                                    <th>
                                                                        Size
                                                                    </th>
                                                                    <th>
                                                                        Qty
                                                                    </th>
                                                                    <th>
                                                                        Action
                                                                    </th>
                                                                </thead>
                                                                <tbody class="text-center">
                                                                    {
                                                                        this.state.productDetail.map((item, index) => (
                                                                            <tr key={index}>
                                                                                <td>{item.ColorName}</td>
                                                                                <td>{item.Size}</td>
                                                                                <td>{item.Qty}</td>
                                                                                <td><Link to={"/admin/editproductdetail/" + this.props.match.params.productid}>
                                                                                    <p class="font-weight-bold" style={{ color: '#63BCC9', width: 50 }}><i class="fas fa-edit"></i> Edit</p>
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
