import React, { Component, PropTypes } from 'react';

export default class Feedback extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'alert', 'info']).isRequired,
    header: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  }

  getIconForType(type) {
    switch (type) {
    case 'success':
      return <i className="fa fa-check-circle-o"></i>;
    case 'alert':
      return <i className="fa fa-ban"></i>;
    default:
      return <i className="fa fa-exclamation-triangle"></i>;
    }
  }

  render() {
    const { type, header, children } = this.props;
    const typeClass = `feedback-${type}`;
    const icon = this.getIconForType(type);

    return (
      <div className={`feedback ${typeClass}`}>
        <div className="feedback-icon-container">{icon}</div>
        <div className="feedback-content-container">
          <h4>{header}</h4>
          <p>{children}</p>
        </div>
      </div>
    );
  }
}
