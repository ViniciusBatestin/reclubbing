import React from "react";
import HeroVideo from "./components/HeroVideo";
import NavBar from "./components/Navibar";

import reclubbingVideo from "./assets/reclubbing_halloween.mp4"
import partyFlyer from "./assets/halloween.png"

function App() {
  return (
    <div className="App">
      <NavBar className="nav-area"/>
      <HeroVideo
      className="hero-area"
      videoSrc={reclubbingVideo}
      flyerImgSrc={partyFlyer}
      />
    </div>
  );
};

export default App;
