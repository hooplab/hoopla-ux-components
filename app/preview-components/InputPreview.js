import React, { Component } from 'react';
import { Input } from '../../lib/HooplaComponents';

export default class InputPreview extends Component {
  render() {
    return (
      <div>
        <h1>{'<Input />'}</h1>
        <Input />

        <div>
          <p>Usage:</p>
          <pre>
            {'<Input type={STRING} placeholder={STRING} value={STRING} onChange={FUNCTION} />'}
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
