import React, { Component } from 'react';

require('./styles/app.scss');

import InputPreview from './preview-components/InputPreview';
import ButtonPreview from './preview-components/ButtonPreview';

import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="span-4">
          <Navigation />
        </div>
        <div className="span-8">
          <InputPreview />
          <ButtonPreview />
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('root'));
