import React from 'react';
import Exhibitor from './components/exhibitor/Exhibitor';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Sponsor from './components/sponsor/Sponsor';
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Experience />
      <Exhibitor />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default App



