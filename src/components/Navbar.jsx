import React from 'react';
import '../components/Navbar.css';

const Navbar = () => {
return <nav className = 'nav'>

<div>
  <a className='item active'>Profile</a>
  </div>

  <div>
  <a className='item'>Messages</a>
  </div>

  <div>
  <a className='item'>News</a>
  </div>

  <div>
  <a className='item'>Music</a>
  </div>

  <div>
  <a className='item'>Settings</a>
  </div>

</nav>

}

export default Navbar;