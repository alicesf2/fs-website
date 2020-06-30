import React from "react";
import { Card, Container, Image } from "semantic-ui-react";
import { Parallax } from "react-scroll-parallax";
import "./About.css";

export default function About() {
  return (
    <>
      <h1 className="page-header">WHAT IS FASHION SHOW?</h1>;
      <Container text>
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
        <h1 className="section-header">MEET THE SCENES</h1>
        <Card.Group itemsPerRow={4}>
          <Card raised>
            <Image src="https://via.placeholder.com/300" />
            <Card.Content>
              <h1 align="center">THROWBACK</h1>
              <p className="card-text">
                Throwback is all about feeling good and having fun dancing to
                songs that we enjoyed so much growing up!
              </p>
            </Card.Content>
          </Card>
          <Card raised>
            <Image src="https://via.placeholder.com/300" />
            <Card.Content>
              <h1 align="center">CULTURAL</h1>
              <p className="card-text">
                Cultural covers popular Asian songs (Korean, Chinese,
                Vietnamese, Thai, Japanese, etc.) as well as traditional pieces
                such as fan & ribbon dances.
              </p>
            </Card.Content>
          </Card>
          <Card raised>
            <Image src="https://via.placeholder.com/300" />
            <Card.Content>
              <h1 align="center">BIZCAZ</h1>
              <p className="card-text">
                BizCaz's feel is pretty fluid and laid-back, but don't worry,
                it'll still have you wanna get up and shake your rump.
              </p>
            </Card.Content>
          </Card>
          <Card raised>
            <Image src="https://via.placeholder.com/300" />
            <Card.Content>
              <h1 align="center">MODERN</h1>
              <p className="card-text">
                Modern is a free form, expressive dance style that incorporates
                aspects of theatre and ballet but also goes beyond that.
              </p>
            </Card.Content>
          </Card>
        </Card.Group>
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
    </>
  );
}
