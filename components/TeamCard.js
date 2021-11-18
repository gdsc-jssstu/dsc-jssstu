import React, { useState } from "react";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "./Icons";

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
        layout="responsive"
      />
      <div className="card-body text-center">
        <p className="card-title">{props.title}</p>
        <p className="team-social-media">
          {props.instagramLink && (
            <a
              href={props.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="social-circle-icon" alt="" />
            </a>
          )}
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="social-circle-icon" alt="" />
            </a>
          )}
          {props.linkedinLink && (
            <a
              href={props.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="social-circle-icon" alt="" />
            </a>
          )}
          {props.twitterLink && (
            <a
              href={props.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="social-circle-icon" alt="" />
            </a>
          )}
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
