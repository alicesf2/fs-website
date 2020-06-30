import React from "react";
import { Card, Container, Image, Segment } from "semantic-ui-react";
import scenes from "../../data/scenes";
import "./About.css";

export default function About() {
  return (
    <>
      <div class="about-heading">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>WHAT IS FASHION SHOW?</b>
          </mark>
        </div>
      </div>
      <Container className="section-container" text>
        <p className="page-description">
          For the past 35 years, the Asian American Association (AAA) has hosted
          Fashion Show (FS) on the University of Illinois at Urbana-Champaign
          campus. While it originally began as a traditional fashion show, it
          eventually evolved into the dance showcase that it is known for today.
          Fashion Show remains as AAA's largest event of the year, attracting
          more than 400 guests to Foellinger Auditorium annually.
        </p>
      </Container>
      <Container className="section-container">
        <h1 className="section-header">WHO CAN GET INVOLVED?</h1>
        <Container text>
          <p className="page-description">
            Fashion Show features dancers from all backgrounds including those
            who have never danced before. Everyone is welcome! Student teachers
            host weekly dance lessons to prepare members for the annual show. If
            you have any questions or concerns about the whole process, please
            email the Head Coords at fs.headcoord@gmail.com. We would love to
            see you get involved with us!
          </p>
        </Container>
      </Container>
      <Container className="section-container">
        <h1 className="section-header">MEET THE SCENES</h1>
        <Card.Group itemsPerRow={4}>
          {scenes.map((scene) => (
            <Card raised>
              <Image src="https://via.placeholder.com/300" />
              <Card.Content>
                <h1 className="card-title">{scene.name}</h1>
                <p className="card-text">{scene.description}</p>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    </>
  );
}
