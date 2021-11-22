import React, { useState } from "react";
import Image from "next/image";
import { Box, Button, Modal } from "@material-ui/core";

const TeamCard = function (props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        backgroundColor: "#f7f7f7",
        color: "#333",
        padding: 15,
        borderRadius: 10,
        margin: 5,
      }}
    >
      <div className="text-center" style={{ marginBottom: 10 }}>
        <Image
          src={props.faceImage}
          className="border-rounded"
          alt={props.title}
          height={150}
          width={150}
          // layout="responsive"
        />
        <h3 style={{ fontSize: 24 }} className="text-quicksand-medium">
          {props.title}
        </h3>
        <div
          style={{
            flexWrap: "wrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
          }}
        >
          {props.instagramLink && (
            <a
              href={props.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Instagram className="social-circle-icon" alt="" /> */}
              <i
                className="fab fa-instagram "
                style={{
                  color: "#f137a4",
                }}
              ></i>
            </a>
          )}
          {props.githubLink && (
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github "
                style={{
                  color: "#121212",
                }}
              ></i>
            </a>
          )}
          {props.linkedinLink && (
            <a
              href={props.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin "
                style={{
                  color: "#0275d8",
                }}
              ></i>
            </a>
          )}
          {props.twitterLink && (
            <a
              href={props.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-twitter "
                style={{
                  color: "#5bc0de",
                }}
              ></i>
            </a>
          )}
        </div>
      </div>
      <div className="card-body text-center">
        <p className="card-text text-nunito-regular">{props.shortBio}</p>
        <div>
          <Button
            className={`team-${props.team}`}
            size="small"
            // style={{ color: "white" }}
            onClick={handleOpen}
          >
            Read More
            <i className={`fas fa-plus fa-sm team-${props.team}`}></i>
          </Button>
          <Modal open={open} onClose={handleClose}>
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                backgroundColor: "white",
                borderRadius: 15,
                boxShadow: 24,
                padding: "1.5rem",
              }}
            >
              <div className="text-center">
                <h2
                  style={{ color: "black" }}
                  className="text-quicksand-medium"
                >
                  {props.title}
                </h2>
              </div>
              <p
                className="card-text text-nunito-regular"
                style={{ color: "black" }}
              >
                {props.children}
              </p>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
