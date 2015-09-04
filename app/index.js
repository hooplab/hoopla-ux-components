import React, { Component } from 'react';

import InputPreview from './preview-components/InputPreview';
import ButtonPreview from './preview-components/ButtonPreview';

require('./styles/app.scss');

class App extends Component {
  render() {
    return (
      <div>
        <InputPreview />
        <ButtonPreview />
      </div>
    )
  }
}

React.render(<App />, document.getElementById('root'));
