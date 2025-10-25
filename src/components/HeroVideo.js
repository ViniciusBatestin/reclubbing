import React, { useState,useEffect } from "react";
import '../style/HeroVideo.css'



const HeroVideo = ({videoSrc, poster, mobileVideoSrc, className}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const activeVideoSrc = isMobile ? mobileVideoSrc : videoSrc;

  const raLink = "https://ra.co/events/2273829"

  useEffect (() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
      window.addEventListener('resize', checkScreenSize);
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
  }, [])

  return (
    <div className={`hero-video-wraper ${className}`}>
      <video className="hero-video"
        //standar video attr
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        key={activeVideoSrc}
      >
        <source src={activeVideoSrc} type="video/mp4" />

        {/* {Fallback content} */}
        Your browser does not support the video tag.
      </video>

      <div className="ra-box-wrapper">
        <a href={raLink}
        target="_blank"
        rel="noopener noreferrer"
        className="ra-button">
          BUY TICKETS / INFO
        </a>
      </div>
    </div>
  );
};

export default HeroVideo;
