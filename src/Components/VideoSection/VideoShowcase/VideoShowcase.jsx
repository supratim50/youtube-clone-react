import React from 'react';

import "./VideoShowcase.css";
import VideoCard from '../../Card/VideoCard/VideoCard';

const VideoShowcase = () => {
  return (
    <div className='video-showcase p-lg-horizontal m-lg-horizontal'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
    </div>
  )
}

export default VideoShowcase