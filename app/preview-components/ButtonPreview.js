import React, { Component } from 'react';
import { Button } from '../../lib/HooplaComponents';

export default class ButtonPreview extends Component {
  render() {
    return (
      <div>
        <h1><a name="Button">{'<Button />'}</a></h1>

        <div>
          <p>Examples:</p>
          <div className="span-full spacing-1">
            <Button text="Button" />
            <Button type="primary" text="primary" />
            <Button type="success" text="success" />
            <Button type="warning" text="warning" />
            <Button type="danger" text="danger" />
          </div>
          <div className="span-full spacing-2">
            <Button text="Small Button" size="small"/>
            <Button text="Standard Button" size="standard" />
            <Button text="Large Button" size="large" />
          </div>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<button type={STRING} text={STRING} click={FUNCTION} />'}
            </code>
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
    );
  }
}
