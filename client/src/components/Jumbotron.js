import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "../components/Carousel";
export default function JumbotronCarousel() {
  return (
    <div>
      <Jumbotron>
        <Carousel />
      </Jumbotron>
    </div>
  );
}
