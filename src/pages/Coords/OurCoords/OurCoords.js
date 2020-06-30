import React from "react";
import { Divider, Grid, Container, Image } from "semantic-ui-react";
import {
  headCoords,
  throwbackCoords,
  culturalCoords,
  bizcazCoords,
  modernCoords,
} from "../../../data/coords";
import "./OurCoords.css";

export default function OurCoords() {
  return (
    <>
      <div class="oc-heading">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>OUR COORDS</b>
          </mark>
        </div>
      </div>
      <Container className="section-container" text>
        <p className="page-description">
          There’s no doubt that without the Coords, there wouldn’t be a Fashion
          Show! Within each Scene are 2-3 Coords dedicated to making FS the best
          it can be. Our Dance Coords not only teach, but choreograph all of the
          amazing dances our models perform. Logistic Coords handle the finer
          details and make sure that the Scene remains on track for show day.
        </p>
      </Container>
      <Container className="section-container">
        <h1 className="section-header">MEET THE COORDS</h1>
        <h3 className="section-subheader">HEAD COORDS</h3>
        <Grid>
          <Grid.Row columns={2}>
            {headCoords.map((coord) => (
              <Grid.Column>
                <div className="image-container">
                  <Image
                    src={require(`../../../assets/coords/${coord.src}`)}
                    size="large"
                    circular
                  />
                </div>
                <div className="caption-container">
                  <p className="image-caption">
                    <b>{coord.name}</b>
                  </p>
                  <p className="image-subcaption">{coord.position}</p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <hr className="section-divider" />
        <h3 className="section-subheader">BIZCAZ</h3>
        <Grid>
          <Grid.Row columns={3}>
            {bizcazCoords.map((coord) => (
              <Grid.Column>
                <div className="image-container">
                  <Image
                    src={require(`../../../assets/coords/${coord.src}`)}
                    size="medium"
                    circular
                  />
                </div>
                <div className="caption-container">
                  <p className="image-caption">
                    <b>{coord.name}</b>
                  </p>
                  <p className="image-subcaption">{coord.position}</p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <hr className="section-divider" />
        <h3 className="section-subheader">CULTURAL</h3>
        <Grid>
          <Grid.Row columns={3}>
            {culturalCoords.map((coord) => (
              <Grid.Column>
                <div className="image-container">
                  <Image
                    src={require(`../../../assets/coords/${coord.src}`)}
                    size="medium"
                    circular
                  />
                </div>
                <div className="caption-container">
                  <p className="image-caption">
                    <b>{coord.name}</b>
                  </p>
                  <p className="image-subcaption">{coord.position}</p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <hr className="section-divider" />
        <h3 className="section-subheader">MODERN</h3>
        <Grid>
          <Grid.Row columns={3}>
            {modernCoords.map((coord) => (
              <Grid.Column>
                <div className="image-container">
                  <Image
                    src={require(`../../../assets/coords/${coord.src}`)}
                    size="medium"
                    circular
                  />
                </div>
                <div className="caption-container">
                  <p className="image-caption">
                    <b>{coord.name}</b>
                  </p>
                  <p className="image-subcaption">{coord.position}</p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <hr className="section-divider" />
        <h3 className="section-subheader">THROWBACK</h3>
        <Grid>
          <Grid.Row columns={3}>
            {throwbackCoords.map((coord) => (
              <Grid.Column>
                <div className="image-container">
                  <Image
                    src={require(`../../../assets/coords/${coord.src}`)}
                    size="medium"
                    circular
                  />
                </div>
                <div className="caption-container">
                  <p className="image-caption">
                    <b>{coord.name}</b>
                  </p>
                  <p className="image-subcaption">{coord.position}</p>
                </div>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <hr className="section-divider" />
      </Container>
    </>
  );
}
