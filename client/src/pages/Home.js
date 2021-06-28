import React from "react";
import { Container } from "semantic-ui-react";
import Categories from "../components/Categories";
// import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import "../pages/style.css";
import Background from "../img/Background_08.mp4";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Home = () => (
  <>
    <div className="container-bg">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          minWidth: "100%",
          minHeight: "100%",
          zIndex: "-1",
          right: 0,
          bottom: 0,
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
      <Jumbotron />
      {/* <d        className="flex-grow-1 container-bg"
        style={{ margin: 0, width: "90%" }}
      > */}
      <Categories />
      {/* </d> */}

      {/* <Footer /> */}
    </div>
  </>
);

export default Home;
