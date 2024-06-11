import logo from './logo.svg';
// import './App.css';

// import Navbar from './components/Navbar';
import './App.css';
import {IndexRoute, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Arrangements from './components/pages/Arrangements';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* <Router history={hashHistory}> */}
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
          {/* <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='About' component={About} />
            <Route path='Arrangements' component={Arrangements} />
            <Route path='Contact' component={Contact} />
          </Route> */}
            <Route path='/' element={<Home />} />
            <Route path='/#/About' element={<About />} />
            <Route path='/#/Arrangements' element={<Arrangements />} />
            <Route path='/#/Contact' element={<Contact />} />
            <Route path='/#/Portfolio' element={<Portfolio />} />
          </Routes>
        </ScrollToTop>

        {/*       
        <div className="App">
          <header className="App-header">
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
         */}
      </Router>
      <Footer />
    </>



  );
}

export default App;
