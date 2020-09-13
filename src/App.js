import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className = 'app-wrapper'>

      <header className = 'header'>
        <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png' />
      </header>

      <nav className = 'nav'>

        <div>
          <a>Profile</a>
          </div>
        
          <div>
          <a>Messages</a>
          </div>

          <div>
          <a>News</a>
          </div>

          <div>
          <a>Music</a>
          </div>

          <div>
          <a>Settings</a>
          </div>

      </nav>

      <div className = 'content'>
        <div>
        <img src ='https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg'/>
        </div>        
        
        <div>
        ava + desc         
        </div>

        <div>
          My posts       
            <div>
            New posts
            </div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>           
        </div>
       

        

        Main content
      
      </div>



    </div>);
}

export default App;
