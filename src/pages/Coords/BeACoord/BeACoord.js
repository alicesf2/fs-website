import React from "react";
import { Button, Container, Grid } from "semantic-ui-react";
import promoVids from "../../../data/promo";
import "./BeACoord.css";

export default function BeACoord() {
  return (
    <>
      <div class="bac-heading">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>JOIN OUR TEAM</b>
          </mark>
        </div>
      </div>
      <Container className="section-container">
        <h1 className="section-header">#FS35 PROMO VIDS</h1>
        <Grid>
          <Grid.Row columns={3}>
            {promoVids.map((vid) => (
              <Grid.Column>
                <iframe
                  width="350"
                  height="200"
                  src={vid}
                  frameborder="0"
                  allow={`accelerometer; autoplay; encrypted-media; gyroscope; 
                    picture-in-picture`}
                  allowfullscreen
                ></iframe>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
      <Container className="section-container" text>
        <p className="page-description">
          Without Coords, there wouldn't be a Fashion Show. Apply to be a Coord
          and be part of the #FS35 Team!
        </p>
        <div className="app-button">
          <a href="http://tinyurl.com/fs35coord" target="_blank">
            <Button>
              <p className="button-text">Apply Here!</p>
            </Button>
          </a>
        </div>
      </Container>
    </>
  );
}
