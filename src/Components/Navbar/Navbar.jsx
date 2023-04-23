import React from 'react';
import "./Navbar.css";

// images
import Youtbe from "../../images/youtube.png";
import Profile from "../../images/profile.png";

// icons
import { FiMenu, FiSearch, FiPlusCircle, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-secondary flex justify-between align-center">
        {/* header left */}
        <div className='flex align-center header-left'>
            <div className='header-icon icon-size flex align-center '>
                <FiMenu />
            </div>
            <div className='logo flex justify-center align-center'>
                <img className='logo-img' src={Youtbe} />
            </div>
        </div>
        {/* search */}
        <div className='p-sm-vertical flex align-center'>
            <div className='flex align-center search-box'>
                <form id='search-form'>
                    <input className='header text-secondary search-input' placeholder='Search' />
                </form>
                <div className='search-btn-box'>
                    <button className='search-btn text-secondary header'><FiSearch /></button>
                </div>
            </div>
        </div>
        {/* header right */}
        <div className='header-right flex justify-between align-center'>
            <div className='header-icon icon-size flex align-center'>
                <FiPlusCircle />
            </div>
            <div className='header-icon icon-size flex align-center'>
                <FiBell />
            </div>
            <div className='profile'>
                <img className='profile-img' src={Profile} alt="Profile" />
            </div>
        </div>
    </div>
  )
}

export default Navbar;