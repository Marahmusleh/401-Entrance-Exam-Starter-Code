import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import FavFlowers from './components/FavFlowers';



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
            {isAuthenticated && (
        
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `Home` component, if they are not, render the `Login` component */}
                <Home />
              </Route>
              )}
                          {isAuthenticated && (

              <Route exact path="/favFlowers">
              <FavFlowers /> /* TODO: if the user is logged in, render the `FavFlowers` component, if they are not, render the `Login` component */
              </Route>
                          )}
            <Login />
            
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
