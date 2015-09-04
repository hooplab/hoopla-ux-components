import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email']).isRequired,
    text: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
  }

  render() {
    const { type, text, click } = this.props;
    const buttonTypeClass = `button-${type}`;

    return (
      <button className='button {buttonTypeClass}' onClick={click}>
        {text}
      </button>
    );
  }
}
