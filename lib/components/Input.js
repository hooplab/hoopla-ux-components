import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'email']).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    change: PropTypes.func,
    alert: PropTypes.oneOf(['error', 'warning']),
    alertMessage: PropTypes.string,
  }

  render() {
    const { type, placeholder, value, change, alert, alertMessage } = this.props;
    // TODO: Display alert in some way.

    return (
      <input type={type} placeholder={placeholder} value={value} onChange={change} />
    );
  }
}
