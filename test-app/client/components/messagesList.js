import React from "react";
import PropTypes from 'prop-types';

class MessagesList extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      messages: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/messages')
      .then(response => response.json())
      .then(data => this.setState({ 'messages':data }));
  }
  render() {
    const {messages} = this.state;
    console.log(messages)
    return (
      <h1>Hello</h1>
    );
  }
}
export default MessagesList;