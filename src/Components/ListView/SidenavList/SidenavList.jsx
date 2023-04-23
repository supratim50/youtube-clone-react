import React from 'react';
import "./SidenavList.css";

const SidenavList = ({icon, text, active, clickHandler}) => {
  return (
    <div className={`listbox text-primary flex align-center p-lg ${active ? 'active' : ''}`} onClick={() => clickHandler(text)}>
        <div className='icon-box icon-size flex align-center'>
            {icon}
        </div>
        <div className='text flex align-center header'>
            {text}
        </div>
    </div>
  )
}

export default SidenavList