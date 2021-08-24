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
            
        
              <Route exact path="/">
              {this.props.auth0.isAuthenticated && <Home />}
              </Route>
              

              <Route exact path="/favFlowers">
              {this.props.auth0.isAuthenticated && <FavFlowers />}
              </Route>
                          
            <Login />
            
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
