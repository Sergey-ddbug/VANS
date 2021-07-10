import axios from 'axios';
import { isNil } from 'lodash';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Footer from './components/Footer';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
import TwilioTest from "./components/Twilio/TwilioTest";
import CreatePost from './pages/CreatePost';
import Header from './components/Header/Header';
import Profile from './pages/Profile';


const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get("/api/users").then((response) => {
      if (!isNil(response.data.user)) {
        dispatch({ type: SET_USER, user: response.data.user });
      } else {
        dispatch({ type: UNSET_USER });
      }
    });
  }, [dispatch, history]);

  const largeContainer = {
    height: '100vh'
  }

  return (
    <div style={largeContainer} className="d-flex flex-column">
      <Header />
      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/twilio" component={TwilioTest} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/twilio" component={TwilioTest} />

          <Redirect to="/" />
        </Switch>

      )}
      <Footer />
    </div >


  );
};

export default App;
