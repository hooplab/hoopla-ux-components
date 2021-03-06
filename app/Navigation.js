import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className="sticky">
        <div className="span-full">
          <h2>Hoopla React Components</h2>
          <ul>
            <li><a href="#Feedback">Feedback</a></li>
            <li><a href="#Button">Button</a></li>
            <li><a href="#Input">Input</a></li>
            <li><a href="#Textarea">Textarea</a></li>
            <li><a href="#ProgressBar">Progressbar</a></li>
            <li><a href="#Radio">Radio</a></li>
            <li><a href="#Table">Table</a></li>
            <li><a href="#Checkbox">Checkbox</a></li>
            <li><a href="#Icon">Icon</a></li>
            <li><a href="#Pagination">Pagination</a></li>
            <li><a href="#ButtonizedInput">TODO: ButtonizedInput</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
