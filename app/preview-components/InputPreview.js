import React, { Component } from 'react';
import { Input } from '../../lib/HooplaComponents';

export default class InputPreview extends Component {
  render() {
    return (
      <div>
        <h1><a name="Input">{'<Input />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Input type="text" />
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Input type={STRING} placeholder={STRING} value={STRING} onChange={FUNCTION} />'}
            </code>
          </pre>
        </div>

        <div>
          <p>Options:</p>
          <ul>
            <li>type: PropTypes.oneOf(['text', 'number', 'email']).isRequired,</li>
            <li>placeholder: PropTypes.string</li>
            <li>value: PropTypes.string</li>
            <li>change: PropTypes.func</li>
            <li>alert: PropTypes.oneOf(['error', 'warning'])</li>
            <li>alertMessage: PropTypes.string</li>
          </ul>
        </div>
      </div>
    )
  }
}
