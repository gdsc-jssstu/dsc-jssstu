import React from "react";
import Image from "next/image";

export default function TeamBigCard(props) {
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
            layout="intrinsic"
          />{" "}
        </div>
        <div className="col-md-8">
          <div className="card-body text-md-left text-center">
            <p className="card-title">{props.title}</p>
            <p className="team-social-media">
              <a href={props.instagramLink} target="_blank" rel="noopener">
                <img
                  src="images/Instagram.svg"
                  className="social-circle-icon"
                  alt=""
                />
              </a>
              <a href={props.githubLink} target="_blank" rel="noopener">
                <img
                  src="images/Github.svg"
                  className="social-circle-icon"
                  alt=""
                />
              </a>
              <a href={props.linkedinLink} target="_blank" rel="noopener">
                <img
                  src="images/Linkedin.svg"
                  className="social-circle-icon"
                  alt=""
                />
              </a>
            </p>
            <p className="card-text">{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
