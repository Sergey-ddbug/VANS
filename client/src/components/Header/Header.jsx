import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./Assets/x.svg";
import { ReactComponent as MenuIcon } from "./Assets/menu.svg";
import logo from '../../img/Vans1.png';
import "./header.css";
import { Link, useHistory } from "react-router-dom"
import { useStoreContext } from "../../store/store";
import { LOADING, UNSET_USER } from "../../store/actions";
import axios from "axios";



const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .get("/api/users/logout")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace("/login");
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };

  return (
    <div className="header col-lg-12 ">
      <div className="logo-nav">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <ul className="signin-up">
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/" className="btn btn-link text-secondary">
              <span className="text-secondary">HOME</span>
            </Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="#" className="btn btn-link text-secondary">
              <span className="text-secondary">UPCOMING</span>
            </Link>
          </li>

          {!state.user ?
            <>
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">

                  <span className="text-secondary">LOGIN</span>
                </Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">SIGNUP </span>
                </Link>
              </li>
            </> :
            <>
              <li className="option " onClick={closeMobileMenu}>
                <Link to="/profile" className="btn btn-link text-secondary">
                  <span className="text-secondary">MY PROFILE</span>
                </Link>
              </li>
              <li className="option " onClick={closeMobileMenu}>
                <Link to="/createpost" className="btn btn-link text-secondary">
                  <span className="text-secondary">CREATE POST</span>
                </Link>
              </li>
              <li onClick={closeMobileMenu} >
                <Link
                  to="/"
                  onClick={logout}
                  className="btn btn-link text-secondary "
                >
                  <span className="text-secondary">LOGOUT</span>

                </Link>
              </li>
            </>
          }
        </ul>
      </div>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option mobile-option" onClick={closeMobileMenu}>
          <Link to="/" className="btn btn-link text-secondary">
            <span className="text-secondary">HOME</span>
          </Link>
        </li>
        {state.user ?
          <>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="#" className="btn btn-link text-secondary">
                <span className="text-secondary">UPCOMING</span>
              </Link>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/profile" className="btn btn-link text-secondary">
                <span className="text-secondary">MY PROFILE</span>
              </Link>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/login" onClick={logout} className="btn btn-link text-secondary">
                <span className="text-secondary">LOGOUT</span>
              </Link>
            </li>
          </> :
          <>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/login" className="btn btn-link text-secondary">
                <span className="text-secondary">LOGIN</span>
              </Link>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <Link to="/signup" className="btn btn-link">
                <span className="text-secondary">SIGNUP</span>
              </Link>
            </li>
          </>
        }
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
            <MenuIcon className="menu-icon" />
          )}
      </div>
    </div>
  );
};

export default Header;