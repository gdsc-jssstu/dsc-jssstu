import React from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin } from "./Icons";

import { decode } from "blurhash";
import { getImgFromArr } from "array-to-image";

export default function TeamBigCard(props) {
  let blurDataURL = "";
  if (process.browser && props.blurDataURL) {
    const pixels = decode(props.blurDataURL, 32, 32);
    const image = getImgFromArr(pixels, 32, 32);
    blurDataURL = image.src;
  }

  return (
    <div className="flip-card chapter-lead-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          {" "}
          <Image
            src={props.faceImage}
            className="card-img-top"
            alt="team-lead"
            height={350}
            width={350}
            layout="responsive"
            blurDataURL={"LRLUZ~Ri]VozL$xbV@Rj?uM{Oqof"}
            placeholder={props.blurDataURL ? "blur" : undefined}
          />{" "}
        </div>
        <div className="col-md-8">
          <div className="card-body text-md-left text-center">
            <p className="card-title">{props.title}</p>
            <p className="team-social-media">
              <a
                href={props.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="social-circle-icon" alt="" />
              </a>
              <a
                href={props.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="social-circle-icon" alt="" />
              </a>
              <a
                href={props.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="social-circle-icon" alt="" />
              </a>
            </p>
            <p className="card-text">{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
