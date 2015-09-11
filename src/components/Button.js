import React, { Component, PropTypes } from 'react';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']).isRequired,
    children: PropTypes.string.isRequired,
    click: PropTypes.func,
    size: PropTypes.oneOf(['small', 'standard', 'large']).isRequired,
  }

  static defaultProps = {
    type: 'default',
    size: 'standard',
  }

  render() {
    const { type, children, size, click } = this.props;
    const buttonTypeClass = `button-${type}`;
    const buttonSizeClass = `button-${size}`;
    return (
      <button className={`button ${buttonTypeClass} ${buttonSizeClass}`} onClick={click}>
        {children}
      </button>
    );
  }
}
