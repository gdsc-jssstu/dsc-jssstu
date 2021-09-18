import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import { decode } from "blurhash";
import { getImgFromArr } from "array-to-image";

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
            <span className="etmln_event_description" data-aos="fade-up">
              {event.description}
            </span>
            <span className="etmln_timeline_dot"></span>
          </div>
          <div className="etmln_img_slider">
            <Carousel showThumbs={false}>
              {event.images.map((img, idx) => {
                let blurDataURL = "";
                if (process.browser && img.blurDataURL) {
                  const pixels = decode(img.blurDataURL, 32, 32);
                  const image = getImgFromArr(pixels, 32, 32);
                  blurDataURL = image.src;
                }

                return (
                  <div
                    className="etmln-img-container"
                    data-aos="zoom-in-up"
                    key={{ idx }}
                  >
                    <Image
                      className="etmln-img"
                      src={img.src}
                      layout="fill"
                      objectFit="contain"
                      blurDataURL={img.blurDataURL ? blurDataURL : undefined }
                      placeholder={img.blurDataURL ? "blur" : undefined }
                      alt="DSC JSSSTU Event"
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
