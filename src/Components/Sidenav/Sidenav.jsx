import React, {useState} from 'react';
import "./Sidenav.css";

import SidenavList from '../ListView/SidenavList/SidenavList';

// icons 
import {BiHomeAlt2, BiBoltCircle, BiLinkAlt} from "react-icons/bi"

const Sidenav = () => {

    const listData = [
        {text: "Home", icon: <BiHomeAlt2 />},
        {text: "Shorts", icon: <BiBoltCircle />},
        {text: "Subscription", icon: <BiLinkAlt />},
    ]

    const [active, setActive] = useState("Home");

    const clickHandler = (item) => {
        setActive(item);
        console.log(item)
    }

  return (
    <div className='side-nav bg-primary'> 
        {
            listData.map((item) => (
                <SidenavList icon={item.icon} text={item.text} active={item.text === active ? true : false} clickHandler={clickHandler} />
            ))
        }
    </div>
  )
}

export default Sidenav