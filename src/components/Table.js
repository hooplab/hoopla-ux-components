import React, { Component, PropTypes } from 'react';

export default class Table extends Component {
  static propTypes = {
    children: PropTypes.any,
  }

  render() {
    return (
      <table className="table">
        {this.props.children}
      </table>
    );
  }
}
