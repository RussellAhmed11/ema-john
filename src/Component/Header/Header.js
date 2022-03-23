import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
       <nav className='Header'>
           <img src={logo} alt="" />
           <div>
               <a href="/Shope">Shope</a>
               <a href="/Orders">Orders</a>
               <a href="/Invetory">Invetory</a>
               <a href="/About">About</a>
           </div>
       </nav>
    );
};

export default Header;