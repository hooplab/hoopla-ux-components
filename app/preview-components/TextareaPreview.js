import React, { Component } from 'react';
import { Textarea, Table } from '../../src/HooplaComponents';

export default class InputPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Textarea">{'<Textarea />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Textarea rows={3}>Hellu</Textarea>
          <Textarea rows={2} alert="error">Hellu</Textarea>
          <Textarea rows={2} alert="warning">Hellu</Textarea>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {`<Textarea
                  rows={NUMBER}
                  placeholder={STRING}
                  label={STRING}
                  change={FUNCTION}
                  alert={STRING}
                  alertMessage={STRING}>
                  Content
                </Textarea>`}
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
              <td>rows</td>
              <td>Integer</td>
              <td>false</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>String</td>
              <td>false</td>
            </tr>
            <tr>
              <td>label</td>
              <td>String</td>
              <td>false</td>
            </tr>
            <tr>
              <td>change</td>
              <td>Function</td>
              <td>false</td>
            </tr>
            <tr>
              <td>alert</td>
              <td>error, warning</td>
              <td>false</td>
            </tr>
            <tr>
              <td>alertMessage</td>
              <td>String</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
