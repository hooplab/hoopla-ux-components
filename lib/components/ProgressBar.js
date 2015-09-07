import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
  static propTypes = {
    size: PropTypes.oneOf(['flat', 'standard', 'large']).isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['green', 'red', 'dark', 'blue']).isRequired,
  }

  static defaultProps = {
    size: 'standard',
    color: 'green',
  }

  render() {
    const { size, value, color } = this.props;
    const colorClass = `progress-${color}`;
    const sizeClass = `progress-${size}`;

    let progressText;
    if (size === 'large') {
      progressText = <div className="progress-text">{value}%</div>;
    }

    return (
      <div className={`progress ${colorClass} ${sizeClass}`}>
        <div className="progress--bar" style={{width: `${value}%`}}></div>
        {progressText}
      </div>
    );
  }
}
