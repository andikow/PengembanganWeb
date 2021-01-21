import './App.css';
import './assets/fontawesome/css/all.css';
import {BrowserRouter as Router,
        Route,
        Link
      } from 'react-router-dom';
import AboutUs from './components/aboutus.js';
import AddProduct from './components/addproduct.js';
import Admin from './components/admin.js';
import AdminOrder from './components/adminorder.js';
import AdminOrder2 from './components/adminorder2.js';
import AdminOrder3 from './components/adminorder3.js';
import AdminOrder4 from './components/adminorder4.js';
import AdminOrderDetail from './components/adminorderdetail.js';
import AdminProduct from './components/adminproduct.js';
import CardProduct from './components/cardProduct.js';
import ChangePassword from './components/changePassword.js';
import Checkout from './components/checkout.js';
import Contact from './components/contact.js';
import Creating1 from './components/creating1.js';
import Creating2 from './components/creating2.js';
import EditProduct from './components/editproduct.js';
import FilterProduct from './components/filterProduct.js';
import Footer from './components/footer.js';
import ForgotPassword from './components/forgotPassword.js';
import Header from './components/header.js';
import Help from './components/help.js';
import Home from './components/home.js';
import MyOrder from './components/myorder.js';
import Order1 from './components/order1.js';
import Order2 from './components/order2.js';
import Order3 from './components/order3.js';
import OrderDetail from './components/orderdetail.js';
import Payment1 from './components/payment1.js';
import Payment2 from './components/payment2.js';
import Privacy from './components/privacy.js';
import ProductDetail from './components/productDetail.js';
import Profil from './components/profil.js';
import ProfilOrder from './components/profilorder.js';
import ProfilSosial from './components/profilsosial.js';
import QtyCheckout from './components/qtycheckout.js';
import Register from './components/register.js';
import Shipping1 from './components/shipping1.js';
import Shipping2 from './components/shipping2.js';
import Shop from './components/shop.js';
import ShoppingCart from './components/shoppingCart.js';
import SortBy from './components/sortBy.js';
import Term from './components/term.js';

function App() {
  return (
    <div className="container-fluid px-0 no-gutters">
      <Router>
      <Header />
      <Route path="/" exact component = {Home}/>
      <Route path="/aboutus" component = {AboutUs}/>
      <Route path="/admin/addproduct" component = {AddProduct}/>
      <Route path="/admin" exact component = {Admin}/>
      <Route path="/admin/order1" component = {AdminOrder}/>
      <Route path="/admin/order2" component = {AdminOrder2}/>
      <Route path="/admin/order3" component = {AdminOrder3}/>
      <Route path="/admin/order4" component = {AdminOrder4}/>
      <Route path="/admin/adminorderdetail/:orderid" component = {AdminOrderDetail}/>
      <Route path="/admin/product" component = {AdminProduct}/>
      <Route path="/cardproduct" component = {CardProduct}/>
      <Route path="/changepassword" component = {ChangePassword}/>
      <Route path="/checkout" component = {Checkout}/>
      <Route path="/contact" component = {Contact}/>
      <Route path="/creating1" component = {Creating1}/>
      <Route path="/creating2" component = {Creating2}/>
      <Route path="/admin/editproduct" component = {EditProduct}/>
      <Route path="/filterproduct" component = {FilterProduct}/>
      <Route path="/footer" component = {Footer}/>
      <Route path="/forgotpassword" component = {ForgotPassword}/>
      <Route path="/header" component = {Header}/>
      <Route path="/help" component = {Help}/>
      <Route path="/myorder" component = {MyOrder}/>
      <Route path="/order1" component = {Order1}/>
      <Route path="/order2" component = {Order2}/>
      <Route path="/order3" component = {Order3}/>
      <Route path="/orderdetail/:id" component = {OrderDetail}/>
      <Route path="/payment1" component = {Payment1}/>
      <Route path="/payment2" component = {Payment2}/>
      <Route path="/privacy" component = {Privacy}/>
      <Route path="/productdetail" component = {ProductDetail}/>
      <Route path="/profil" exact component = {Profil}/>
      <Route path="/profil/order" component = {ProfilOrder}/>
      <Route path="/profil/sosial" component = {ProfilSosial}/>
      <Route path="/qtycheckout" component = {QtyCheckout}/>
      <Route path="/register" component = {Register}/>
      <Route path="/shipping1" component = {Shipping1}/>
      <Route path="/shipping2" component = {Shipping2}/>
      <Route path="/shop" component = {Shop}/>
      <Route path="/shoppingcart" component = {ShoppingCart}/>
      <Route path="/sortby" component = {SortBy}/>
      <Route path="/term" component = {Term}/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
;
