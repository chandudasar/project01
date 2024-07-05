import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to the Home Page!',
    };
  }

  changeMessage = () => {
    this.setState({ message: 'Thanks for clicking!' });
  };

  render() {
    return (
      <div className="home">
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    );
  }
}

export default Home;
