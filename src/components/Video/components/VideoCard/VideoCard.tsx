import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/VideoCard.css";

function VideoCard({image, title, channel, views, timestamp, channelImage}: {image : any, title : any, channel : any, views : any, timestamp : any, channelImage : any}) {
    return (
        
        <div className="videoCard">
            <Link to="/watch">
            <img src={image} alt="" className="videoCard_image" />
            <div className="videoCard_info">
                <Avatar
                    className="videoCard_avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                    {views} · {timestamp}
                    </p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default VideoCard;
