import React from "react";
import { Container, Grid, Icon, Image } from "semantic-ui-react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div class="home-heading">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>FASHION SHOW</b>
          </mark>
        </div>
      </div>
      <div class="home-section-1">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>35 YEARS OF SHOWS...</b>
          </mark>
        </div>
      </div>
      <div class="home-section-2">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>...35 YEARS OF FRIENDSHIP...</b>
          </mark>
        </div>
      </div>
      <div class="home-section-3">
        <div class="heading-text">
          <mark class="heading-highlight">
            <b>...35 YEARS OF MEMORIES.</b>
          </mark>
        </div>
      </div>
    </>
  );
}
