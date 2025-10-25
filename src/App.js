import React from "react";
import HeroVideo from "./components/HeroVideo";
import NavBar from "./components/Navibar";
import Events from "./components/Events";
import About from "./components/About";

import reclubbingVideo from "./assets/reclubbing_halloween.mp4"
import reclubbingVideoMobile from "./assets/mobile-video.MP4"
import partyFlyer from "./assets/halloween.jpeg"

function App() {
  return (
    <div className="App">
      <NavBar className="nav-area"/>
      <HeroVideo
      className="hero-area"
      videoSrc={reclubbingVideo}
      mobileVideoSrc={reclubbingVideoMobile}
      />
      <Events
      className="events-area"
      flyerSrc={partyFlyer} />
      <About className="about-area"/>

    </div>
  );
};

export default App;
