import React from "react";
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
class MessagesList extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      messages: null,
    };
  }

  componentDidMount() {
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => this.setState({ 'messages':data.messages }));
  }
  render() {
    const {messages} = this.state;
    return (
      <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>firstName</th>
      <th>lastName</th>
      <th>emailAdress</th>
      <th>Phone Number</th>
      <th>Subject</th>
      <th>Message Description</th>
    </tr>
  </thead>
  <tbody>
    {messages!==null&& messages.map((message, i) => {                        
           return(
                   <tr key={i}>
                    <td>{message.id}</td>
                    <td>{message.firstName}</td>
                    <td>{message.lastName}</td>
                    <td>{message.emailAdress}</td>
                    <td>{message.phoneNumber}</td>
                    <td>{message.subject}</td>
                    <td>{message.body}</td>
                  </tr>
                             
                  ) 
      })
      }
  </tbody>
</Table>
    );
  }
}
export default MessagesList;