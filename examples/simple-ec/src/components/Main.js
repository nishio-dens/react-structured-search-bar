require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Hello from 'react-structured-search-bar';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />

        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>

        <h3>Hello</h3>
        <Hello />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
