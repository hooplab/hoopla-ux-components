import React, { Component, PropTypes } from 'react';

export default class Radio extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['green', 'red', 'yellow', 'blue']).isRequired,
    children: PropTypes.string.isRequired,
    change: PropTypes.func,
    click: PropTypes.func,
  }

  static defaultProps = {
    color: 'green',
  }

  render() {
    const { color, children, click, change } = this.props;
    const colorClass = `radio-color-${color}`;

    return (
      <label className={`${colorClass}`}>
        <input type="radio" onClick={click} onChange={change} />
        <span>{children}</span>
      </label>
    );
  }
}
