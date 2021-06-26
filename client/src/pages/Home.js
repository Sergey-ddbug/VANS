import React from "react";
import { Container } from "semantic-ui-react";
import Categories from "../components/Categories";
// import Footer from '../components/Footer';
import Jumbotron from "../components/Jumbotron";
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Home = () => (
  <>
    <Container style={{ margin: 20, width: 10700 }}>
      <Jumbotron />
      <Categories />
    </Container>
    {/* <Footer /> */}
  </>
);

export default Home;
