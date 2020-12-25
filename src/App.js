import './App.css';
import './assets/fontawesome/css/all.css';
import {BrowserRouter as Router,
        Route,
        Link
      } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Checkout from './components/checkout.js';
import Home from './components/home.js';
import CardProduct from './components/cardProduct.js';
import FilterProduct from './components/filterProduct.js';
import MyOrder from './components/myorder.js';
import ProductDetail from './components/productDetail.js';
import ShoppingCart from './components/shoppingCart.js';
import SortBy from './components/sortBy.js'

function App() {
  return (
    <div className="container-fluid px-0 no-gutters">
      <Router>
      <Header />
      <Route path="/" exact component = {Home}/>
      <Route path="/shop" component = {Checkout}/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
;
