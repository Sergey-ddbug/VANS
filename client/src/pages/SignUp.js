import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../pages/style.css';

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    firstName: "",
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
        firstName: signUpCreds.firstName,

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

    <div className="text-center signContainer flex-grow-1">
      <h4>Sign Up</h4>
      <form className="form-signin">
        <label htmlFor="inputfirstName" className="sr-only">
          First Name
        </label>
        <input
          type="firstName"
          id="inputName"
          className="form-control"
          name="firstName"
          placeholder="First Name"
          value={signUpCreds.firstName}
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
          className="btn btn-lg btn-danger btn-block"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
