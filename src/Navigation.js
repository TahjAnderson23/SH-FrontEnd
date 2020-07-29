import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from  './SHLogo.jpg';
import "./Navigation.css"
  import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom"

  import Home from "./Pages/Home"
  import About from "./Pages/About"
  /* Does this count */
  
  class Navigation extends Component {
    render() {
      return (
    <div>
      <Router>

        {/* Navigation */}
        <Navbar bg="dark" variant="dark" fixed="top">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <img className="Logo" src={Logo} alt="Logo"/>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} className="Routes-NavLink" to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} className="Routes-NavLink" to='/About'>About</Nav.Link>
          </Nav>

        {/* Search Bar */}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        
        </Navbar>

        <Switch>
          <Route exact path="/" render ={() => <Home />} />
          <Route exact path="/About" render ={() => <About />} />

        </Switch>
  </Router>
        </div>
      );
    }
  }
  
  export default Navigation; 
