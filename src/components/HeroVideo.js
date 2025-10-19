import React from "react";
import '../style/HeroVideo.css'



const HeroVideo = ({videoSrc, poster, flyerImgSrc}) => {
  return (
    <div className="hero-grid-container"
    >
      <video className="hero-video hero-grid-item"
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
        className="hero-flyer-img hero-gri-item"
        src={flyerImgSrc}
        alt="Event Flyer"
      />
    </div>
  );
};

export default HeroVideo;
