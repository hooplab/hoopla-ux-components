import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email']).isRequired,
    size: PropTypes.oneOf(['small', 'standard', 'large']).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    change: PropTypes.func,
    alert: PropTypes.oneOf(['error', 'warning']),
    alertMessage: PropTypes.string,
  }

  static defaultProps = {
    size: 'standard',
  }

  render() {
    const { type, size, placeholder, value, change, alert, alertMessage } = this.props;
    const sizeClass = `input-${size}`;
    const alertClass = alert ? `input-alert-${alert}` : '';

    return (
      <div className={`input ${alertClass}`}>
        <input className={`input ${sizeClass} ${alertClass}`} type={type} placeholder={placeholder} value={value} onChange={change} />
        {alert ? <span>{alertMessage}</span> : ''}
      </div>
    );
  }
}
