import React, { useEffect, useState } from "react";
import Image from "next/image";

import { decode } from "blurhash";
import { getImgFromArr } from "array-to-image";
import { Container, Grid } from "@material-ui/core";

export default function TeamBigCard(props) {
  // let blurDataURL = "";
  const [blurDataURL, setBlurDataURL] = useState(undefined);

  useEffect(() => {
    if (process.browser && props.blurDataURL) {
      const pixels = decode(props.blurDataURL, 32, 32);
      const image = getImgFromArr(pixels, 32, 32);
      // blurDataURL = image.src;
      setBlurDataURL(image.src);
      // console.log("blurDataURL:" + blurDataURL);
    }
  }, [props]);

  return (
    // <div className="flip-card chapter-lead-card">
    //   <div className="row no-gutters">
    //     <div className="col-md-4">
    <Container
      style={{
        backgroundColor: "#f7f7f7",
        color: "#333",
        padding: 15,
        borderRadius: 10,
        margin: 5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Image
            src={props.faceImage}
            className="card-img-top border-rounded"
            alt="team-lead"
            height={250}
            width={250}
            layout="responsive"
            blurDataURL={blurDataURL}
            placeholder={blurDataURL ? "blur" : undefined}
            // blurDataURL={props.blurDataURL ? blurDataURL : undefined}
            // placeholder={props.blurDataURL ? "blur" : undefined}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <div className="card-body text-md-left text-center">
            <h2 className="text-quicksand-medium">{props.title}</h2>
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
                    className="fab fa-instagram fa-lg"
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
                    className="fab fa-github fa-lg"
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
                    className="fab fa-linkedin fa-lg"
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
                    className="fab fa-twitter fa-lg"
                    style={{
                      color: "#5bc0de",
                    }}
                  ></i>
                </a>
              )}
            </div>
            <p className="card-text text-nunito-regular">{props.children}</p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
