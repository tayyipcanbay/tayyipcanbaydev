import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import Home from './pages/home';

const userData= {
  Header: {
    name: 'Tayyip Canbay',
    description: 'Full Stack Developer',
  },
  Navbar: {
    1: {
      name: 'Home',
      link: '/',
    },
    2: {
      name: 'Skills',
      link: '/skills',
    },
    3: {
      name: 'Projects',
      link: '/projects',
    },
    4: {
      name: 'Contact',
      link: '/contact',
    },
  },
  Homepage: {
    Left: {
      First:{
        photo:"https://avatars.githubusercontent.com/u/73071862?s=400&u=b5db5ef8baa3c35b2efc509a4d857d9c388e4131&v=4",
        name: 'Hi, I\'m Tayyip Canbay',
        title: 'I\'m a Full Stack Developer',
      },
      Second:{
        Socials: {
          github:{ link: 'https://github.com/tayyipcanbay', icon: 'fab fa-github'},
          linkedin:{ link: 'https://www.linkedin.com/in/tayyip-canbay-5b1b1b1b3/', icon: 'fab fa-linkedin'},
          instagram: { link: 'https://instagram.com/tayyipcanbay', icon: 'fab fa-instagram'},
          twitter: { link: 'https://twitter.com/tayyip_canbay', icon: 'fab fa-twitter'},
          email: { link: 'mailto:mrsecmac@gmail.com', icon: 'fas fa-envelope'},
          },
      },
    },
    Right: {
      First:{
        title: 'About Me',
        description: 'I am a 17 years old developer from Turkey. I am currently learning React and React Native. I am also learning Python and C++.',
      },
      Second:{
        title: 'Education',
        description: 'I am currently studying at the 11th grade of high school. I am also studying at the 3rd grade of Computer Engineering at the University of Selcuk.',
      },
    },
  },
  Skills: {
  },
  Projects: {
    1: {
      name: 'I-Han E-Stan Blue Malware',
      description: 'A malware that can be used to steal data from a computer.',
      link: "https://github.com/tayyipcanbay/malware",
      image:"link_to_image",
    },
    2: {
      name: 'TTen',
      description: 'Chat-GPT based app.',
      link: "https://github.com/tayyipcanbay/tten",
      image:"link_to_image",
    },
  },
  Contact: {
    default: true,
    add:{
      platformName: 'ZortBook',
      platformLink: 'https://zortbook.com',
      platformIcon: 'fab fa-linkedin',
    },
  }
}


function App() {
  const [theme, setTheme] = React.useState('light');
  const [user, sestUser] = React.useState(userData);
  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <Header headerData={user["Header"]} theme={theme} setTheme={setTheme} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Navbar navbarData={user["Navbar"]} theme={theme}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
        <Routes>
          <Route path="/" element={<Home homepageData={user["Homepage"]} theme={theme} />} />
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
