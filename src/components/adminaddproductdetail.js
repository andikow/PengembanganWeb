import React from 'react';
import photo from './../assets/img/productex1.jpg';
import './../assets/css/admin.css'
import { Link } from 'react-router-dom';
import { post } from 'jquery';

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
    
    getColorList(){
        fetch('http://localhost:8000/admin/colorlist')
            .then(response => response.json())
            .then(res => {
                this.setState({
                    ColorList: res
                })
            })
    }


    componentDidMount() {
        this.getColorList()
    }

    // changeValue(categoryID){
    //   this.setState ({CategoryID: categoryID})
    // } 

    addProductDetail() {
        
        var data = {
            ColorID: this.state.ColorID,
            Size: this.state.Size,
            Qty: this.state.Qty
        }

        fetch(
            'http://localhost:8000/admin/addproductdetail/' + this.props.match.params.productid,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(data)
            }
        ).then(respons => respons.json())
            .then(alert('Product variation successfully added!'))
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
                                        <h3 class="ml-4">Add Product Variation</h3>
                                        <br />
                                        <div class="row">
                                            <div class="col">
                                                <form>
                                                    <div>
                                                        <label>ProductID</label>
                                                        <input type="text" disabled="disabled" value={this.props.match.params.productid} className="form-control" style={{ width: 300 }} placeholder="ProductID" />
                                                    </div>
                                                </form>
                                                <br />
                                                <form>
                                                    <div>
                                                        <label>Color ID</label>
                                                        <input onChange={ev => this.setState({ ColorID: ev.target.value })} type="text" className="form-control" style={{ width: 300 }} placeholder="Color ID" />
                                                    </div>
                                                </form><br />
                                                <form>
                                                    <div>
                                                        <label>Size</label>
                                                        <input onChange={ev => this.setState({ Size: ev.target.value })} type="text" className="form-control" style={{ width: 300 }} placeholder="Size" />
                                                    </div>
                                                </form><br />
                                                <form>
                                                    <div>
                                                        <label>Qty</label>
                                                        <input onChange={ev => this.setState({ Qty: ev.target.value })} type="text" className="form-control" style={{ width: 300 }} placeholder="Qty" />
                                                    </div>
                                                </form><br />
                                                <Link to={"/admin/productdetail/" + this.props.match.params.productid} >
                                                    <button onClick={() => this.addProductDetail()} className="btn btn-danger my-0 font-weight-bold ml-auto mr-4 float-right" type="button">Add variation</button>
                                                </Link>
                                            </div>
                                            <div className="col">
                                                <div class=" pt-4 col-md-12">
                                                    <div class="card">
                                                        <div class="card-header bg-color-transparent">
                                                            <h5 class="card-title">Color List</h5>
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
