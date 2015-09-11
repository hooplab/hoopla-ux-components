import React, { Component } from 'react';
import { ProgressBar, Table } from '../../src/HooplaComponents';

export default class ProgressBarPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="ProgressBar">{'<ProgressBar />'}</a></h1>

        <div>
          <p>Examples:</p>
          <ProgressBar color="green" size="flat" value={30} />
          <ProgressBar color="blue" value={60} />
          <ProgressBar color="red" size="large" value={80} />
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<ProgressBar value={INTEGER} size={STRING} color={STRING} />'}
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
              <td>value</td>
              <td>0 - 100</td>
              <td>true</td>
            </tr>
            <tr>
              <td>size</td>
              <td>flat, standar, large</td>
              <td>false</td>
            </tr>
            <tr>
              <td>color</td>
              <td>green, red, dark, blue</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
