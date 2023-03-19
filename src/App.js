import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Home from './pages/home';


function App() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Header theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navbar />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/skills" element={<Skills theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme}/>} />
        </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
