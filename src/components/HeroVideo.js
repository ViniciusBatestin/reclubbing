import React from "react";
import '../style/HeroVideo.css'



const HeroVideo = ({videoSrc, poster, flyerImgSrc}) => {
  return (
    <div className="hero-video-wraper">
      <video className="hero-video"
        //standar video attr
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />

        {/* {Fallback content} */}
        Your browser does not support the video tag.
      </video>

      <img
      className="flyer-img"
        src={flyerImgSrc}
        alt="Event Flyer"
      />
    </div>
  );
};

export default HeroVideo;
