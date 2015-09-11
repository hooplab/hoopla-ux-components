import React, { Component, PropTypes } from 'react';

const SIZES = ['flat', 'standard', 'large'];
const COLORS = ['green', 'red', 'dark', 'blue'];

export default class ProgressBar extends Component {
  static propTypes = {
    size: PropTypes.oneOf(SIZES).isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.oneOf(COLORS).isRequired,
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
