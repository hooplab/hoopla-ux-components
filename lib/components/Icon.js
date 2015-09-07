import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  }

  render() {
    const { type } = this.props;

    return (
      <i className={`fa ${type}`}></i>
    );
  }
}
