import React from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <Container className="footer-container" text>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className="icon-container">
              <Icon name="facebook" size="massive" />
            </div>
            <p className="icon-caption">AAA Fashion Show 2020-2021</p>
          </Grid.Column>
          <Grid.Column>
            <div className="icon-container">
              <a
                href="https://www.instagram.com/aaa_fashionshow/?hl=en"
                target="_blank"
              >
                <Icon name="instagram" size="massive" />
              </a>
            </div>
            <p className="icon-caption">@aaa_fashionshow</p>
          </Grid.Column>
          <Grid.Column>
            <div className="icon-container">
              <a href="https://www.youtube.com/user/AAAUIUCYT" target="_blank">
                <Icon name="youtube" size="massive" />
              </a>
            </div>
            <p className="icon-caption">AAAUIUCYT</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <p className="footer-msg">Made with ❤️ by Alice Fang</p>
    </Container>
  );
}
