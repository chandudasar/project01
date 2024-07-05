import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <div className="blog">
            <h2>Blog Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ullamcorper metus, a fermentum leo interdum eget. Sed venenatis ligula ut urna malesuada, id congue justo dapibus. Quisque aliquet, quam non vulputate congue, purus ipsum fringilla justo, sed vehicula turpis lorem vel ligula.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
