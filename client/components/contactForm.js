import React from "react";
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import { Form, FormGroup, Col , FormControl, ControlLabel, Button } from 'react-bootstrap';
class ContactForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
          firstName:  '',
          lastName:  '',
          phoneNumber:  '',
          emailAddress: '',
          subject:  '',
          body: '',
    };
    this.onChange =  this.onChange.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }
  onChange (e) {
       this.setState({ [e.target.name]: e.target.value });
  }
  postMessage(e){
   e.preventDefault();
   fetch('messages/create', {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(this.state)
  }).then(function(response) {
    response.status==200? browserHistory.push('/messages'):console.log(response);
  })
  }

  render() {
    return (
     <Form horizontal onSubmit={this.postMessage}>
       <FormGroup controlId="formHorizontalFirstName">
      <Col componentClass={ControlLabel} sm={2}>
        firstName
      </Col>
      <Col sm={5}>
        <FormControl type="input"  name="firstName" placeholder={this.props.firstName} onChange={this.onChange} required/>
      </Col>
    </FormGroup>
      <FormGroup controlId="formHorizontalLastName">
      <Col componentClass={ControlLabel} sm={2}>
        lastName
      </Col>
      <Col sm={5}>
        <FormControl type="input" name="lastName" placeholder={this.props.lastName} onChange={this.onChange} required/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={5}>
        <FormControl type="email" name="emailAdress" placeholder={this.props.emailAddress} onChange={this.onChange} required/>
      </Col>
    </FormGroup>
      <FormGroup controlId="formHorizontalPhone">
      <Col componentClass={ControlLabel} sm={2}>
        Phone number
      </Col>
      <Col sm={5}>
        <FormControl type="input"  name="phoneNumber"  placeholder={this.props.phoneNumber} onChange={this.onChange} required/>
      </Col>
    </FormGroup>
     <FormGroup controlId="formHorizontalSubject">
      <Col componentClass={ControlLabel} sm={2}>
        Subject
      </Col>
      <Col sm={5}>
        <FormControl type="input"  name="subject" placeholder={this.props.subject} onChange={this.onChange} required/>
      </Col>
    </FormGroup>
     <FormGroup controlId="formHorizontalBody">
      <Col componentClass={ControlLabel} sm={2}>
        Description
      </Col>
      <Col sm={5}>
        <FormControl componentClass="textarea"  name="body"   placeholder={this.props.body} onChange={this.onChange} required/>
      </Col>
    </FormGroup> 
    <FormGroup>
      <Col smOffset={2} sm={5}>
        <Button type="submit">Submit</Button>
      </Col>
    </FormGroup>
  </Form>
    );
  }
}
ContactForm.defaultProps = {
  firstName:  'firstName',
  lastName:  'lastName',
  phoneNumber:  '00000000',
  emailAddress: 'x@gmail.com',
  subject:  'subject',
  body: 'your message description',
};
ContactForm.propTypes = {
  firstName:  PropTypes.string,
  lastName:  PropTypes.string,
  phoneNumber:  PropTypes.string,
  emailAddress:  PropTypes.string,
  subject:  PropTypes.string,
  body:  PropTypes.string,
};
export default ContactForm;