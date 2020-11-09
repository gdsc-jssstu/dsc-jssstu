import React, { useState } from "react";
import Image from "next/image";

const TeamCard = function (props) {
  const [isFlipped, setFlip] = useState(false);

  function onFlip() {
    setFlip(!isFlipped);
  }

  return (
    <div
      className={isFlipped ? "flip-card flipped" : "flip-card"}
      id="1"
      onClick={onFlip}
    >
      <div className="flip-card-inner">{props.children}</div>
    </div>
  );
};

const TeamCardFront = function (props) {
  return (
    <div className="flip-card-front">
      {" "}
      <Image
        src={props.faceImage}
        className="card-img-top"
        alt="..."
        height={350}
        width={350}
        layout="intrinsic"
      />
      <div className="card-body text-center">
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
        <p className="read-more">Read More +</p>
      </div>
    </div>
  );
};

const TeamCardBack = function (props) {
  return (
    <div className="flip-card-back ">
      <div className="card-body text-center">
        <p className="card-text">{props.children}</p>
        <p className="read-more">Go Back</p>
      </div>
    </div>
  );
};

export { TeamCard, TeamCardFront, TeamCardBack };
