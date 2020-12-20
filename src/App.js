import './App.css';
import './assets/fontawesome/css/all.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Checkout from './components/checkout.js';
import Home from './components/home.js';

function App() {
  return (
    <div className="container-fluid px-0 no-gutters">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
