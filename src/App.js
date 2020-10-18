import React from 'react';
import './App.css';
import './components/Navbar/Navbar.module.css'
import './components/Header/Header.module.css'
import './components/Profile/Profile.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import Profile from './components/Profile/Profile.jsx'

const App = () => {
  return (
    <div className = 'app-wrapper'>      

      <Header/>
      <Navbar/>
      <Profile/>      
      
    </div>
      )
    }

export default App;
