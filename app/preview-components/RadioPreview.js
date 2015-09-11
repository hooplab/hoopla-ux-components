import React, { Component } from 'react';
import { Radio, Table } from '../../src/HooplaComponents';

export default class RadioPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Radio">{'<Radio />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Radio>I need something</Radio>
          <Radio color="red">I need something</Radio>
          <Radio color="blue">I need something</Radio>
          <Radio color="yellow">I need something</Radio>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Radio />'}
            </code>
          </pre>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Property name</th>
              <th>Property Type</th>
              <th>Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>color</td>
              <td>green, red, yellow, blue</td>
              <td>false</td>
            </tr>
            <tr>
              <td>click</td>
              <td>Function</td>
              <td>false</td>
            </tr>
            <tr>
              <td>change</td>
              <td>Function</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
