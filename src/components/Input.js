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
    label: PropTypes.string,
    required: PropTypes.bool.isRquired,
  }

  static defaultProps = {
    size: 'standard',
    required: false,
  }

  render() {
    const { type, size, placeholder, value, label, required, change, alert, alertMessage } = this.props;
    const sizeClass = `input-${size}`;
    const alertClass = alert ? `input-alert-${alert}` : '';

    let labelElement;
    if (required) {
      labelElement = <label className="input-label">{label} <span style={{color: 'red'}}>*</span></label>
    } else {
      labelElement = <label className="input-label">{label}</label>
    }

    return (
      <div className={`input ${alertClass}`}>
        {labelElement}
        <input className={`input ${sizeClass} ${alertClass}`} type={type} placeholder={placeholder} value={value} onChange={change} />
        {alert ? <div>{alertMessage}</div> : ''}
      </div>
    );
  }
}
