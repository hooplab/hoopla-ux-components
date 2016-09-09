import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('./styles/app.scss');

import InputPreview from './preview-components/InputPreview';
import TextareaPreview from './preview-components/TextareaPreview';
import ButtonPreview from './preview-components/ButtonPreview';
import ProgressBarPreview from './preview-components/ProgressBarPreview';
import FeedbackPreview from './preview-components/FeedbackPreview';
import RadioPreview from './preview-components/RadioPreview';
import TablePreview from './preview-components/TablePreview';
import CheckboxPreview from './preview-components/CheckboxPreview';
import IconPreview from './preview-components/IconPreview';
import PaginationPreview from './preview-components/PaginationPreview';

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
          <TextareaPreview />
          <ProgressBarPreview />
          <RadioPreview />
          <TablePreview />
          <CheckboxPreview />
          <IconPreview />
          <PaginationPreview />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
