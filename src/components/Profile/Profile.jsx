import React from 'react'
import c from './Profile.module.css';

const Profile = () =>

{
    return <div className = {c.content}>
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
    </div>
}

export default Profile;
    
  
