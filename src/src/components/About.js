import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  toggleInfo = () => {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  };

  render() {
    return (
      <div className="about">
        <h2>About Page</h2>
        <button onClick={this.toggleInfo}>
          {this.state.showInfo ? 'Hide Info' : 'Show Info'}
        </button>
        {this.state.showInfo && <p>This is a simple React application with routing.</p>}
      </div>
    );
  }
}

export default About;
