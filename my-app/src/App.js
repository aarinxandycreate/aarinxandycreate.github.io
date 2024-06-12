import logo from './logo.svg';
// import './App.css';

// import Navbar from './components/Navbar';
import './App.css';
import {HashRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <HashRouter basename='/'>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Arrangements' element={<Arrangements />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Portfolio' element={<Portfolio />} />
          </Routes>
        </ScrollToTop>
      </HashRouter>
      <Footer />
    </>



  );
}

export default App;
