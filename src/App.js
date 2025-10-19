import React from "react";
import HeroVideo from "./components/HeroVideo";

import reclubbingVideo from "./assets/reclubbing_halloween.mp4"
import partyFlyer from "./assets/halloween.jpeg"

function App() {
  return (
    <div className="App">
      <HeroVideo
      // className="hero-area"
      videoSrc={reclubbingVideo}
      flyerImgSrc={partyFlyer}
      />
    </div>
  );
};

export default App;
