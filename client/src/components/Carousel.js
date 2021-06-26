import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block mw-100"
          src="https://greaterriversidehispanicchamberofcommerce.org/wp-content/uploads/ZoomFatigue-scaled-e1614972364871-1980x990.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="danger">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/FL365_Free_Certs_Blog_Header.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="danger">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sednainspired.com/wp-content/uploads/Yoga-e1586274929597-1980x990.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            {" "}
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="danger">Learn More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}
