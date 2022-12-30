import React from "react";
import "../styles/RecommendedVideo.css";
import VideoCard from "../VideoCard/VideoCard";
import FilterBar from "../FilterBar/FilterBar";
import ChannelLogo from "../../../../assets/profile-pic.png";
import VideoImage from "../../../../assets/video_image.png";


function RecommendedVideos() {
  return (
    <div className="recommended">
      <FilterBar />

      <h2>Recommended</h2>

      <div className="recommendedVideo">
        <VideoCard
          title="Game of Thrones~Every dragon scene~Seasons 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://pome-mag.com/wp-content/uploads/2017/09/game-of-thrones-season-7-episode-4-the-spoils-of-war-35.jpg"
          channelImage="https://images-na.ssl-images-amazon.com/images/I/91KwasehsHL._RI_.jpg"
          channel="Game Of Thrones"
        />
        <VideoCard
          title="Japanese capsule hotel - PREMIUM!"
          views="519K views"
          timestamp="5 days ago"
          image="https://i.ytimg.com/vi/EmcFk7ppSUw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA60CmfS38LKgPmaEGNgnNRF3zzRg"
          channelImage="https://yt3.ggpht.com/ytc/AMLnZu8QI3bkIHxedno4obakST-RmBzdGJ3J2R-W7uzOBQ=s68-c-k-c0x00ffffff-no-rj"
          channel="808"
        />
        <VideoCard
          title="Learning ReactJS - Innowise 2022"
          views="313K views"
          timestamp="week ago"
          image={VideoImage}
          channelImage={ChannelLogo}
          channel="Andrew Mihaylov"
        />
        <VideoCard
          title="Game of Thrones~Every dragon scene~Seasons 1-8"
          views="1.9M views"
          timestamp="1 year ago"
          image="https://pome-mag.com/wp-content/uploads/2017/09/game-of-thrones-season-7-episode-4-the-spoils-of-war-35.jpg"
          channelImage="https://images-na.ssl-images-amazon.com/images/I/91KwasehsHL._RI_.jpg"
          channel="Game Of Thrones"
        />
        <VideoCard
          title="Japanese capsule hotel - PREMIUM!"
          views="519K views"
          timestamp="5 days ago"
          image="https://i.ytimg.com/vi/EmcFk7ppSUw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA60CmfS38LKgPmaEGNgnNRF3zzRg"
          channelImage="https://yt3.ggpht.com/ytc/AMLnZu8QI3bkIHxedno4obakST-RmBzdGJ3J2R-W7uzOBQ=s68-c-k-c0x00ffffff-no-rj"
          channel="808"
        />
        <VideoCard
          title="Learning ReactJS - Innowise 2022"
          views="313K views"
          timestamp="week ago"
          image={VideoImage}
          channelImage={ChannelLogo}
          channel="Andrew Mihaylov"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
