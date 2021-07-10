import React, { useState, useRef } from "react";
import { Carousel, Button } from "react-bootstrap";
import "../pages/style.css";
import PicOne from "../img/PicOne.png";
import PicTwo from "../img/PicTwo.png";
import PicThree from "../img/PicThree.png";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const galleryCardModal1 = useRef(null);
  const galleryCardModal2 = useRef(null);
  const galleryCardModal3 = useRef(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="divHolder">
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
            <Button variant="danger"
              onClick={() => {
                galleryCardModal1.current.style.display = "block";
                // PicOneModal.style.display =
                //   "block";
              }}>Learn More</Button>
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
            <Button variant="danger"
              onClick={() => {
                galleryCardModal2.current.style.display = "block";
                // PicTwoModal.style.display =
                //   "block";
              }}>Learn More</Button>
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
            <Button variant="danger"
              onClick={() => {
                galleryCardModal3.current.style.display = "block";
                // PicThreeModal.style.display =
                //   "block";
              }}>Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* hidden modals */}
      <div ref={galleryCardModal1} id="gallery-card">
        <div id="PicOne" className="modal-card">
          <div className="visual">
            <img src={PicOne} alt="" />
          </div>
          <div className="modal-info">
            <h2>Easy Access</h2>
            <div className="modal-description">
              <ul>
                <p>
                  Be connected from any device as a tutor or student at anytime.
                </p>

              </ul>
            </div>
            <div className="modal-bottom">
              <a href="/" target="_blank">
                <h3></h3>
              </a>
              <p
                className="close-icon"
                style={{
                  textAlign: "right",
                  fontWeight: 900,
                  fontSize: 2 + "rem",
                  cursor: "pointer"
                }}
                onClick={() => {
                  galleryCardModal1.current.style.display = "none";
                }}>
                &#10005;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*PicTwo Hidden Modals*/}
      <div ref={galleryCardModal2} id="gallery-card">
        <div id="PicTwo" className="modal-card">
          <div className="visual">
            <img src={PicTwo} alt="" />
          </div>
          <div className="modal-info">
            <h2>IT Technology</h2>
            <div className="modal-description">
              <ul>
                <p>
                  Check out the newest classes in IT domain.
                </p>

              </ul>
            </div>
            <div className="modal-bottom">
              <a href="/" target="_blank">
                <h3></h3>
              </a>
              <p
                className="close-icon"
                style={{
                  textAlign: "right",
                  fontWeight: 900,
                  fontSize: 2 + "rem",
                  cursor: "pointer"
                }}
                onClick={() => {
                  galleryCardModal2.current.style.display = "none";
                  // PicTwoModal.style.display = "none";
                }}>
                &#10005;
              </p>
            </div>
          </div>
        </div>
      </div>


      {/*PicThree hidden modal*/}
      <div ref={galleryCardModal3} id="gallery-card">
        <div id="PicThree" className="modal-card">
          <div className="visual">
            <img src={PicThree} alt="" />
          </div>
          <div className="modal-info">
            <h2>Yoga, Meditation, Breathwork and much more</h2>
            <div className="modal-description">
              <ul>
                <p>
                  In this section you will find available classes based on your needs.
                </p>

              </ul>
            </div>
            <div className="modal-bottom">
              <a href="/" target="_blank">
                <h3></h3>
              </a>
              <p
                className="close-icon"
                style={{
                  textAlign: "right",
                  fontWeight: 900,
                  fontSize: 2 + "rem",
                  cursor: "pointer"
                }}
                onClick={() => {
                  galleryCardModal3.current.style.display = "none";
                  // PicThreeModal.style.display = "none";
                }}>
                &#10005;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

