import React from "react";
import "../styles/Watch.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import ReactPlayer from "react-player/youtube"; 
import VideoCard from "../../../components/Video/components/VideoCard/VideoCard";



const Watch = () => {
    return(
        <div className="container">
            <ReactPlayer 
            className="player"
            url="https://www.youtube.com/watch?v=kJAAl13Ltdw"
            width={960}
            height={540}
            controls = {true}/>
            <div className="video_title">
                Winter Jazz | Cozy Winter with December Jazz & Smooth Jazz for Relax, Study, Work
            </div>
        <div className="channel_info">
                <div className="channel_avatar">
                    <img src="https://yt3.ggpht.com/KBIFgYCZpA3W5UdtdYtlEH3LLLW4LHhT1TWJWLE6EURyXOwEQF2jplgnsWzG1DUJ_N5wrvzFBg=s88-c-k-c0x00ffffff-no-rj"
                    /></div>
            <div className="channel_wrapper">
                <div className="channel_name">Coffee Relaxing Jazz</div>
            <div className="channel_subscribers">25.3K subscribers</div>
            </div>
            
            <div className="buttons">
                <button className="button_subscribe">Subscribe</button>
                <button className="button_like"><ThumbUpOutlinedIcon/>1.7K</button>
                <button className="button_dislike"><ThumbDownOffAltOutlinedIcon/></button>
                <button className="button_share"><ReplyOutlinedIcon/>Share</button>
            </div>
            <div className="description"></div>
        </div>
        <div className="comments"></div>
        </div>
        )
    }

export default Watch;
