import React, { Component, PropTypes } from 'react';

export default class Textarea extends Component {
  static propTypes = {
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    change: PropTypes.func,
    alert: PropTypes.oneOf(['error', 'warning']),
    alertMessage: PropTypes.string,
    label: PropTypes.string,
  }

  render() {
    const { rows, children, placeholder, label, change, alert, alertMessage } = this.props;
    const alertClass = alert ? `textarea-alert-${alert}` : '';

    return (
      <div className={`textarea ${alertClass}`}>
        <label className="textarea-label">
          {label}
        </label>
        <textarea className={`textarea ${alertClass}`} rows={rows} placeholder={placeholder} onChange={change}>
          {children}
        </textarea>
        {alert ? <div>{alertMessage}</div> : ''}
      </div>
    );
  }
}
