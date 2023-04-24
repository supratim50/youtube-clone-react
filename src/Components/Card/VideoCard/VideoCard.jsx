import React from 'react';

// import thumbnail from "../../../images/thunbnail.jpg";
// import channel from "../../../images/profile.png";

import "./VideoCard.css";

const VideoCard = ({channel, profile, thumbnail, title, views, uploadDate, videoLink}) => {
  return (
    <a href={videoLink} target='_blank'>
      <div className='card-box' >
        <img className='thumbnail mb-md' src={thumbnail} alt='' />
        <div className='details-box'>
            <div className='channel-box'>
                <img className='channel' src={profile} />
            </div>
            <div className='details'>
                <h2 className='mb-xs text-primary paragraph bold'>{title}</h2>
                <p className='paragraph text-light-grey mb-xs'>{channel}</p>
                <p className='paragraph text-light-grey mb-md'>1{views} Views . {uploadDate}</p>
            </div>
        </div>
      </div>
    </a>
  )
}

export default VideoCard;