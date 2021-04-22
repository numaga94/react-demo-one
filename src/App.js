import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/pages/AboutUs';
import Contacts from './components/pages/Contacts';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/react-demo-one" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
