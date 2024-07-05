import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message sent by ${this.state.name}: ${this.state.message}`);
    this.setState({ name: '', message: '' });
  };
  

  render() {
    return (
      <div className="contact">
        <h2>Contact Page</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default Contact;
