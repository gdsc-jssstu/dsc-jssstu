import React from "react";
import EventTimelineItem from "./EventTimelineItem";
import eventData from "../data/eventData";

const EventTimeline = () => {
  return (
    <>
      <div className="etmln_container">
        {eventData
          .sort((a, b) => {
            let ad = new Date(a.date);
            let bd = new Date(b.date);

            return bd - ad;
          })
          .map((event, idx) => {
            return <EventTimelineItem event={event} key={idx} />;
          })}
      </div>
    </>
  );
};

export default EventTimeline;
