import React from 'react';
import "./TopicList.css"

const TopicList = ({text}) => {
  return (
    <div className='p-sm-horizontal'>
      <div className='list-box header text-secondary bg-grey'>{text}</div>
    </div>
  )
}

export default TopicList