import React,{ useEffect, useState, useContext } from 'react';

import "./VideoShowcase.css";
import VideoCard from '../../Card/VideoCard/VideoCard';
import useFetch from '../../../useFetch';
// context
import { SearchContext } from '../../../App';

// images
import channel from "../../../images/profile.png";

const VideoShowcase = () => {

  const searchContext = useContext(SearchContext);

  // get data 
  const {data, isLoading, fetchData} = useFetch();

  useEffect(() => {
    console.log("From Video",searchContext.searchItem);
    fetchData(searchContext.searchItem)
  }, [searchContext.searchItem])

  return (
    <div className='video-showcase p-lg-horizontal m-lg-horizontal'>
        {
          // Get data logic 
          isLoading 
          ? 
          // if loading is true
            <div className='header text-primary'>
              Loading...
            </div> 
            :
            // if loadingis false then check data is loaded or not, data is an array 
            data.length 
            ? 
            // if loaded then map it 
              data.map((item, index) => (
                console.log(item.url),
                <VideoCard 
                  key={index}
                  channel={item.author ? item.author.name : item.name ? item.name : "No Name"} 
                  profile={item.author ? item.author.bestAvatar.url :  item.bestAvatar ? item.bestAvatar.url : channel}
                  thumbnail={item.bestThumbnail ? item.bestThumbnail.url : "No Thumbnail"}
                  title={item.title ? item.title : "No Title"}
                  views={item.views ? item.views : "No data"}
                  uploadDate={item.uploadedAt ? item.uploadedAt : "No Data"}
                  videoLink={item.url}
                /> 
              ))
              : 
              // if not loaded then somthing is wrong 
              <div>Something went wrong</div>
        }
      
    </div>
  )
}

export default VideoShowcase