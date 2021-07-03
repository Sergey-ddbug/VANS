import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../pages/style.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../pages/assets/Login.css';

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    first_name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signUpCreds);
    axios
      .post("/api/users/signup", {
        first_name: signUpCreds.first_name,

        email: signUpCreds.email,
        password: signUpCreds.password,
      })
      .then((response) => {
        console.log("RESPONSE", response);
        history.replace("/login");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  return (
    <Container className="flex-grow-1">
      <Row>
        <Col>
          <form className="form-signin box">
            <h4>Hi, There</h4>
            <label htmlFor="inputfirst_name" className="sr-only">
              First Name
              </label>
            <input
              type="first_name"
              id="inputName"
              className="form-control"
              name="first_name"
              placeholder="First Name"
              value={signUpCreds.first_name}
              onChange={handleChange}
            />

            <label htmlFor="inputEmail" className="sr-only">
              Email address
              </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              name="email"
              placeholder="Email address"
              value={signUpCreds.email}
              onChange={handleChange}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
              </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              name="password"
              placeholder="Password"
              value={signUpCreds.password}
              onChange={handleChange}
            />
            <button
              className="btn btn-danger btn-md"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
              </button>
          </form>

        </Col>
        <Col className="signuppic">
          <Image
            width={450}
            height={650}
            src="https://images.pexels.com/photos/5254722/pexels-photo-5254722.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
          </Image>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;