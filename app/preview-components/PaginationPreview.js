import React, { Component } from 'react';
import { Pagination, Table } from '../../src/HooplaComponents';

export default class PaginationPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Pagination">{'<Pagination />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Pagination currentPage={3} total={5} />
          <Pagination currentPage={7} total={15} />
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Pagination currentPage={INTEGER} total={INTEGER} />'}
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
                <td>currentPage</td>
                <td>Integer</td>
                <td>true</td>
              </tr>
              <tr>
                <td>total</td>
                <td>Integer</td>
                <td>true</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
