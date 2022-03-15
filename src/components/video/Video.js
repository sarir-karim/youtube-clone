import React from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/15mJuZqZJYw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADBUSRtIkoNzUk9O720TW3jiLNLw"
          alt=""
        />
        <span>06:45</span>
      </div>
      <div className="video__title">
        Nagaland से आए हैं बहुत ही Cute "Meyitemsu Naga"
      </div>
      <div className="video__details">
        <AiFillEye /> 10M views •<span>5 days ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLRcP3My9Iw0TdwjGgxQ0mEnJKSnzqbeixOQBnjrbQ=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p> Rainbow hr</p>
      </div>
    </div>
  );
};

export default Video;
