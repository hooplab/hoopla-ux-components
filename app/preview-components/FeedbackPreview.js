import React, { Component } from 'react';
import { Feedback, Table } from '../../lib/HooplaComponents';

export default class FeedbackPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Feedback">{'<Feedback />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Feedback type="success" header="All good">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Feedback>
          <Feedback type="warning" header="Hold your horses">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Feedback>
          <Feedback type="alert" header="No no no no no...">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Feedback>
          <Feedback type="info" header="Bapedibopi">Lorem Ipsum is simply dummy text of the printing and typesetting industry</Feedback>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Feedback type={STRING} header={STRING}>Content</Feedback>'}
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
              <td>type</td>
              <td>success, warning, alert, info</td>
              <td>true</td>
            </tr>
            <tr>
              <td>header</td>
              <td>String</td>
              <td>true</td>
            </tr>
            <tr>
              <td>oneliner (todo)</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
