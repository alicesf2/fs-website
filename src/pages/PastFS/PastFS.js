import React from "react";
import { Container, Grid } from "semantic-ui-react";
import pastFSVids from "../../data/pastFS";
import "./PastFS.css";

export default function PastFS() {
  return (
    <>
      <div class="pfs-heading">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>PAST FASHION SHOWS</b>
          </mark>
        </div>
      </div>
      <Container className="section-container" text>
        <p className="page-description">
          AAA is proud to have hosted almost 35 years of Fashion Shows! Here are
          a few of our past shows:
        </p>
      </Container>
      <div className="video-container">
        <iframe
          src="https://drive.google.com/file/d/1vDUOfpXmHQhROnOuEgok8HH3It66JffG/preview"
          width="800"
          height="500"
        ></iframe>
        <h3 className="section-subheader">FS34: BE YOU</h3>
        <p className="page-description">Head Coord: Alice Fang</p>
      </div>
      <Container className="video-group">
        <Grid>
          <Grid.Row columns={3}>
            {pastFSVids.map((vid) => (
              <Grid.Column>
                <div className="video-container">
                  <iframe
                    width="350"
                    height="200"
                    src={vid.src}
                    frameborder="0"
                    allow={`accelerometer; autoplay; encrypted-media; gyroscope; 
                    picture-in-picture`}
                    allowfullscreen
                  ></iframe>
                  <h3 className="section-subheader">{vid.name}</h3>
                  <p className="page-description">
                    Head Coords:
                    <br />
                    {vid.headCoords[0]}
                    <br />
                    {vid.headCoords[1]}
                  </p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
      <hr className="footer-divider" />
    </>
  );
}
