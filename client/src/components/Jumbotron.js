import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from '../components/Carousel';
// import '../pages/assets/Login.css';

export default function JumbotronCarousel() {
  return (
    <Jumbotron className="jumb">
      <Carousel />
    </Jumbotron>
  )
}