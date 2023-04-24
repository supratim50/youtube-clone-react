import React, { useContext, useState } from 'react';
import {SearchContext} from "../../App";
import "./Navbar.css";

// images
import Youtube from "../../images/youtube.png";
import Profile from "../../images/profile.png";

// icons
import { FiMenu, FiSearch, FiPlusCircle, FiBell } from "react-icons/fi";

const Navbar = () => {

    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    // Context 
    const searchContext = useContext(SearchContext)

  return (
    <div className="navbar bg-primary text-secondary flex justify-between align-center">
        {/* header left */}
        <div className='flex align-center header-left'>
            <div className='header-icon icon-size flex align-center '>
                <FiMenu />
            </div>
            <div className='logo flex justify-center align-center'>
                <img className='logo-img' src={Youtube} />
            </div>
        </div>
        {/* search */}
        <div className='p-sm-vertical flex align-center'>
            <div className='flex align-center search-box'>
                <form id='search-form'>
                    <input className='header text-secondary search-input' placeholder='Search' value={inputValue} onChange={onChangeHandler} />
                </form>
                <div className='search-btn-box' onClick={() => searchContext.searchDispatch({type: "search", searchItem: inputValue})}>
                    <div className='search-btn text-secondary header'><FiSearch /></div>
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