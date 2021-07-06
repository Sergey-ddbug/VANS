import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "../pages/style.css";


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img

          className="d-block w-100"
          src="https://images.pexels.com/photos/6953985/pexels-photo-6953985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Anytime, Anywhere</h3>
          <p>Learn on your schedule from any device</p>
          <Button variant="danger">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>IT Communications</h3>
          <p>Tutor yourself and others. Make friends during your class</p>
          <Button variant="danger">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3823076/pexels-photo-3823076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Yoga Time</h3>
          <p>
            {" "}
            Find your balance on the VANS.
          </p>
          <Button variant="danger">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
