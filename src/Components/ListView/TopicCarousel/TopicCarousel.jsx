import React from 'react';
import TopicList from "../TopicList/TopicList";

// icons 
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

import "./TopicCarousel.css";

const TopicCarousel = () => {
  return (
    <div className='carousel-box p-md-vertical '>
      {/* <div className='left-arrow-box'>
        <div className='carouselArrow flex align-center jsutify-center icon-size text-primary left'>
          <FiChevronLeft />
        </div>
      </div> */}
        <div className='carousel flex'>
          <TopicList text="All" />
          <TopicList text="Music" />
          <TopicList text="Entertainment" />
          <TopicList text="Motivation" />
          <TopicList text="All" />
          <TopicList text="Music" />
          <TopicList text="Entertainment" />
          <TopicList text="Motivation" />
          <TopicList text="All" />
          <TopicList text="Music" />
          <TopicList text="Entertainment" />
          <TopicList text="Motivation" />
          <TopicList text="All" />
          <TopicList text="Music" />
          <TopicList text="Entertainment" />
          <TopicList text="Motivation" />
        </div>
        {/* <div className='right-arrow-box'>
          <div className='carouselArrow flex align-center justify-center icon-size text-primary right'>
            <FiChevronRight />
          </div>
        </div> */}
    </div>
  )
}

export default TopicCarousel