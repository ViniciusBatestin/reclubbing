import React from "react";
import "../style/Events.css"

const Events = ({className, flyerSrc}) => {
  return (
    <section className={`events-section ${className}`} id="events">

      <h1 className="events-title">UPCOMING EVENTS</h1>

      <div className="flyers-list-container">
        <div className="event-flyer-item">
              <img src={flyerSrc} alt="Upcoming event flyer 1" className="event-flyer-img" />
          </div>
            <div className="event-flyer-item">
              <img src={flyerSrc} alt="Upcoming event flyer 2" className="event-flyer-img" />
          </div>
            <div className="event-flyer-item">
              <img src={flyerSrc} alt="Upcoming event flyer 3" className="event-flyer-img" />
          </div>
      </div>

    </section>
  );
};

export default Events
