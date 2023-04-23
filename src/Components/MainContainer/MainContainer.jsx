import React from 'react';

import Sidenav from "../Sidenav/Sidenav";
import Videosec from "../VideoSection/Videosec";

import "./MainContainer.css"

const MainContainer = () => {
  return (
    <div className="container">
        <Sidenav />
        <Videosec />
    </div>
  )
}

export default MainContainer