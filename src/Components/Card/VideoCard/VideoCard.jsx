import React from 'react';

import thumbnail from "../../../images/thunbnail.jpg";
import channel from "../../../images/profile.png";

import "./VideoCard.css";

const VideoCard = () => {
  return (
    <div className='card-box'>
        <img className='thumbnail mb-md' src={thumbnail} alt='' />
        <div className='details-box'>
            <div className='channel-box'>
                <img className='channel' src={channel} />
            </div>
            <div className='details'>
                <h2 className='mb-xs text-primary header'>#SundaySuspense | Hetamgarer Guptodhon Part 1 | Shirshendu Mukhopadhyay | Mirchi Bangla</h2>
                <p className='paragraph text-light-grey mb-xs'>Mirchi Bangla</p>
                <p className='paragraph text-light-grey mb-md'>1.5M Views . 1w ago</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard;