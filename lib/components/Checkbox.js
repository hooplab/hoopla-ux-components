import React, { Component, PropTypes } from 'react';

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    change: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
  }

  render() {
    const { checked, change } = this.props;

    return (
      <input type="checkbox" className={`checkbox`} checked={checked} onChange={change} />
    );
  }
}
