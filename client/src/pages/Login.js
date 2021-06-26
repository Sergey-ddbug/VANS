import API from "../lib/API";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import '../pages/assets/Login.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Login = () => {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    try {
      const response = await API.Users.login(
        loginCreds.email,
        loginCreds.password
      );

      if (response.data.status === "error") {
        setErrorMsg(response.data.message);
        return;
      }

      if (response.status === 200) {
        dispatch({ type: SET_USER, user: response.data });
        setErrorMsg(null);
        history.replace("/");
      }
    } catch (err) {
      console.log("login error: ");
      console.log(err);
    }

  };

  return (

    <Container className="flex-grow-1" >
      <Row>
        <Col>
          <Image
            width={450}
            height={650}
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500">
          </Image>
        </Col>
        <Col>
          <form className="form-signin loginbox">
            <h4>Login</h4>
            {errorMsg ? <p>{errorMsg}</p> : null}
            <p></p>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              name="email"
              placeholder="Email address"
              value={loginCreds.email}
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
              value={loginCreds.password}
              onChange={handleChange}
            />
            <button
              className="btn btn-danger btn-md"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>

        </Col>
      </Row>
    </Container>
  );
};

export default Login;
