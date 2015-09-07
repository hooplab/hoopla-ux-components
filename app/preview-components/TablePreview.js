import React, { Component } from 'react';
import { Checkbox, Table } from '../../lib/HooplaComponents';

export default class TablePreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Table">{'<Table />'}</a></h1>

        <div>
          <p>Examples:</p>

          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Purchase ID</th>
                <th>Num. tickets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Checkbox /></td>
                <td>Pelle Krogstad</td>
                <td>IHD7823D</td>
                <td>3</td>
              </tr>
              <tr>
                <td><Checkbox /></td>
                <td>Johnny Bravo</td>
                <td>JSDF823W</td>
                <td>5</td>
              </tr>
              <tr>
                <td><Checkbox /></td>
                <td>Pedro Muendes</td>
                <td>KOD2A23C</td>
                <td>10</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {`<Table>
                  <thead>...</thead>
                  <tbody>...</tbody>
</Table>`}
            </code>
          </pre>
        </div>
      </div>
    );
  }
}
