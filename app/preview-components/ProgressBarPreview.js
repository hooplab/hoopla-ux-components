import React, { Component } from 'react';
import { ProgressBar } from '../../lib/HooplaComponents';

export default class ProgressBarPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="ProgressBar">{'<ProgressBar />'}</a></h1>

        <div>
          <p>Examples:</p>
          <ProgressBar color="green" size="flat" value={30} />
          <ProgressBar color="blue" value={60} />
          <ProgressBar color="red" size="large" value={80} />
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<ProgressBar type={STRING} placeholder={STRING} value={STRING} onChange={FUNCTION} />'}
            </code>
          </pre>
        </div>

        <div>
          <p>Options:</p>
          <ul>

            <li>size: PropTypes.oneOf(['flat', 'standard', 'large']).isRequired</li>
            <li>value: PropTypes.number.isRequired</li>
            <li>color: PropTypes.oneOf(['green', 'red', 'dark', 'blue']).isRequired</li>
          </ul>
        </div>
      </div>
    )
  }
}
