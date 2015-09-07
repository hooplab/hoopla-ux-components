import React, { Component } from 'react';
import { Checkbox, Table } from '../../lib/HooplaComponents';

export default class CheckboxPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Checkbox">{'<Checkbox />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Checkbox />
          <Checkbox checked={true} />
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Checkbox checked={BOOL} change={FUNCTION} />'}
            </code>
          </pre>
        </div>

        <div>
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
                <td>checked</td>
                <td>Bool</td>
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
      </div>
    );
  }
}
