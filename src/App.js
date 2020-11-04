import logo from './logo.svg';
import './App.css';
import './assets/fontawesome/css/all.css';
import About from './components/navbar.js';

function App() {
  return (

    <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
      <i className = "fal fa-acorn"></i>Tooltip on right
    </button>

  );
}

export default App;
