import React from 'react';

import TopicCarousel from '../ListView/TopicCarousel/TopicCarousel';

import "./Videosec.css"
import VideoShowcase from './VideoShowcase/VideoShowcase';

const Videosec = () => {
  return (
    <div className='video-section bg-primary'>
      <TopicCarousel />
      <VideoShowcase />
    </div>
  )
}

export default Videosec