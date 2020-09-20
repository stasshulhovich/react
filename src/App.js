import React from 'react';
import './App.css';
import './components/Navbar.css'
import './components/Header.css'
import './components/Content.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'

const App = () => {
  return (
    <div className = 'app-wrapper'>      

      <Header/>
      <Navbar/>
      <Content/>      
      
      </div>
      )
    }

export default App;
