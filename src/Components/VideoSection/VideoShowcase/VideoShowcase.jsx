import React,{ useEffect, useState } from 'react';

import "./VideoShowcase.css";
import VideoCard from '../../Card/VideoCard/VideoCard';
import useFetch from '../../../useFetch';

const VideoShowcase = () => {
  
  const [items, setItems] = useState([]);
  const {data, isLoading} = useFetch("sunday suspence");

  return (
    <div className='video-showcase p-lg-horizontal m-lg-horizontal'>
      
        {
          data.length ? data.map((item, index) => (
            // setItems(...items, {
            //   channel : item.author ? item.author.name : item.name ? item.name : "No Name",
            //   profile: item.author ? item.author.bestAvatar.url :  item.bestAvatar ? item.bestAvatar.url : "No Profile",
            //   thumbnail: item.bestThumbnail ? item.bestThumbnail.url : "No Thumbnail",
            //   title: item.title ? item.title : "No Title",
            //   views: item.views ? item.views : "No data",
            //   uploadDate: item.uploadedAt ? item.uploadedAt : "No Data",
            // }),
            // console.log(items)
            // console.log(`channel - ${item.author ? item.author.name : item.name ? item.name : "No Name"} |  
            //             profile - ${item.author ? item.author.bestAvatar.url :  item.bestAvatar ? item.bestAvatar.url : "No Profile" } | 
            //             Thumbnail - ${item.bestThumbnail ? item.bestThumbnail.url : "No Thumbnail"} | 
            //             title - ${item.title ? item.title : "No Title"}`)
            <VideoCard 
              key={index}
              channel={item.author ? item.author.name : item.name ? item.name : "No Name"} 
              profile={item.author ? item.author.bestAvatar.url :  item.bestAvatar ? item.bestAvatar.url : "No Profile"}
              thumbnail={item.bestThumbnail ? item.bestThumbnail.url : "No Thumbnail"}
              title={item.title ? item.title : "No Title"}
              views={item.views ? item.views : "No data"}
              uploadDate={item.uploadedAt ? item.uploadedAt : "No Data"}
            /> 
          )) : <div>Something went wrong</div>
        }
      
    </div>
  )
}

export default VideoShowcase