import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import ContactForm from './components/contactForm'
import MessagesList from './components/messagesList'

const App = () => {
  return (
   <Router>
    <div>
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">medgo-test-app</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link to="/">Contact Form</Link> 
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/messages">Messages List</Link> 
          </NavItem>
        </Nav>
      </Navbar>
      <Route exact path="/" component={ContactForm}/>
      <Route path="/messages" component={MessagesList}/>
    </div>
  </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));