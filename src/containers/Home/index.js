import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import setActivePage from '../../actions/navigation';
import { undertheSea } from '../../constants/svgs.js'

class Home extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('Home | Bere B', 'home');
  }

  render() {
    return (
      <div className="home">
        <div className="pattern-undersea">
          {undertheSea}
        </div>

        <div className="intro-text">
          <h1>Ahoy!</h1>
          <p>
            Welcome to my little internet space. <br/>
            I'm a designer and I like doing some stuff like what you can find in <Link to="/projects">here.</Link>
          </p>
        </div> 
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(Home)
