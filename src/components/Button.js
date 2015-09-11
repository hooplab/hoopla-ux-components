import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']).isRequired,
    text: PropTypes.string.isRequired,
    click: PropTypes.func,
    size: PropTypes.oneOf(['small', 'standard', 'large']).isRequired,
  }

  static defaultProps = {
    type: 'default',
    size: 'standard',
  }

  render() {
    const { type, text, size, click } = this.props;
    const buttonTypeClass = `button-${type}`;
    const buttonSizeClass = `button-${size}`;

    return (
      <button className={`button ${buttonTypeClass} ${buttonSizeClass}`} onClick={click}>
        {text}
      </button>
    );
  }
}
