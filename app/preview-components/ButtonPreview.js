import React, { Component } from 'react';
import { Button } from '../../lib/HooplaComponents';

export default class ButtonPreview extends Component {
  render() {
    return (
      <div>
        <h1>{'<Button />'}</h1>
        <Button text="Button" />

        <div>
          <p>Usage:</p>
          <pre>
            {'<button type={STRING} text={STRING} click={FUNCTION} />'}
          </pre>
        </div>

        <div>
          <p>Options:</p>
          <ul>
            <li>type: PropTypes.oneOf(['text', 'number', 'email']).isRequired</li>
            <li>text: PropTypes.string.isRequired</li>
            <li>click: PropTypes.func.isRequired</li>
          </ul>
        </div>
      </div>
    )
  }
}
