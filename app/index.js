import React, { Component } from 'react';

require('./styles/app.scss');

import InputPreview from './preview-components/InputPreview';
import ButtonPreview from './preview-components/ButtonPreview';
import ProgressBarPreview from './preview-components/ProgressBarPreview';
import FeedbackPreview from './preview-components/FeedbackPreview';
import RadioPreview from './preview-components/RadioPreview';
import TablePreview from './preview-components/TablePreview';
import CheckboxPreview from './preview-components/CheckboxPreview';

import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <Navigation />
        </div>
        <div className="shift-4 span-8">
          <FeedbackPreview />
          <ButtonPreview />
          <InputPreview />
          <ProgressBarPreview />
          <RadioPreview />
          <TablePreview />
          <CheckboxPreview />
        </div>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('root'));
