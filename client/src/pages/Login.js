import axios from "axios";
import API from "../lib/API";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";

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

    // axios
    //   .post('/api/users/login', {
    //     email: loginCreds.email,
    //     password: loginCreds.password,
    //   })
    //   .then((response) => {
    //   })
    //   .catch((error) => {
    //   });
  };

  return (
    <div className="text-center">
      <h4>Login</h4>
      {errorMsg ? <p>{errorMsg}</p> : null}
      <p></p>
      <form className="form-signin">
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
          className="btn btn-lg btn-secondary btn-block"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
