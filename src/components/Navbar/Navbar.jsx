import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className='app__navbar'>
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="app logo" />
        </div>

        <ul className="app__navbar-links">
          <li className="p_opensans"><a href="#home">Home</a></li>
          <li className="p_opensans"><a href="#about">About</a></li>
          <li className="p_opensans"><a href="#menu">Event</a></li>
          <li className="p_opensans"><a href="#awards">Laurels</a></li>
          <li className="p_opensans"><a href="#contact">Locate us</a></li>
        </ul>

        <div className="app__navbar-login">
          <a href="/" className='p_opensans'>Log In / Register</a>
          <div />
     

        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />


          {
            toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">

                <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => { setToggleMenu(false) }} />
                <ul className="app__navbar-smallscreen_links">
                  <li className="p_opensans"><a href="#home">Home</a></li>
                  <li className="p_opensans"><a href="#about">About</a></li>
                  <li className="p_opensans"><a href="#menu">Menu</a></li>
                  <li className="p_opensans"><a href="#awards">Awards</a></li>
                  <li className="p_opensans"><a href="#contact">Contact</a></li>
                </ul>
              </div>

            )}
        </div>
      </div>
    </>
  )
};

export default Navbar;
