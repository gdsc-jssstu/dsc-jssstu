import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const EventTimelineItem = ({ event }) => {
  return (
    <>
      <div className="etmln_timeline_item">
        <div className="etmln_timeline_item_content">
          <div className="etmln_txt_info">
            <span className="etmln_event_name" data-aos="fade-up">
              {event.name}
            </span>
            <span className="etmln_event_date" data-aos="fade-up">
              {event.date}
            </span>
            <span className="etmln_event_discription" data-aos="fade-up">
              {event.discription}
            </span>
            <span className="etmln_timeline_dot"></span>
          </div>
          <div className="etmln_img_slider">
            <Carousel renderThumbs={() => {}}>
              {event.images.map((img, idx) => {
                return (
                  <div
                    className="etmln-img-container"
                    data-aos="zoom-in-up"
                    key={{ idx }}
                  >
                    <Image
                      className="etmln-img"
                      src={img}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventTimelineItem;
