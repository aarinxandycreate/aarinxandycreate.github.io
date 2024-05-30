import logo from './logo.svg';
// import './App.css';

// import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer'
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
     
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className='App-title-text'>
            AARIN x ANDY CREATE
          </p>
          <a
            className="App-link"
            href="https://www.instagram.com/aarinxandycreate/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEBSITE IN DEVELOPMENT
          </a>
        </header>
      </div>
      <Footer />
    </>
    
    
    
  );
}

export default App;
