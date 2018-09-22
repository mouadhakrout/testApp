import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import { Navbar,Nav, NavItem, NavbarBrand, Collapse  } from 'reactstrap';
import ContactForm from './components/contactForm'
import MessagesList from './components/messagesList'
import "bootstrap/scss/bootstrap.scss";
import './index.scss';
const App = () => {
  return (
   <Router>
    <div>
      <Navbar  color="light" light expand="md">
          <NavbarBrand href="/">medgo test app</NavbarBrand>
          <Collapse  navbar>
            <Nav className="ml-3" navbar>
            <NavItem>
              <NavLink to="/">Contact Form</NavLink>
            </NavItem>
             <NavItem>
              <NavLink to="/messages">Messages List</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
         <div className="container-fluid h-100">
          <div className="row justify-content-center align-items-center h-100">
              <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6">
                   <Route exact path="/" component={ContactForm}/>
    
              </div>
          </div>
          <Route path="/messages" component={MessagesList}/>
      </div>
    </div>
  </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));