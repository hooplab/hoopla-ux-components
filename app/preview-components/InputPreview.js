import React, { Component } from 'react';
import { Input, Table } from '../../lib/HooplaComponents';

export default class InputPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Input">{'<Input />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Input type="text" placeholder="placeholder" />
          <Input type="text" value="value" />
          <Input type="text" alert="warning" alertMessage={`When alert="warning"`}/>
          <Input type="text" label="Label" alert="error" alertMessage={`When alert="error"`}/>
          <Input type="text" placeholder="Small" size="small"/>
          <Input type="text" placeholder="Large" size="large"/>
          <Input type="text" label="Label" />
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {`<Input
                  type={STRING}
                  size={STRING}
                  placeholder={STRING}
                  value={STRING}
                  label={STRING}
                  change={FUNCTION}
                  alert={STRING}
                  alertMessage={STRING} />`}
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
              <td>text, number, email</td>
              <td>true</td>
            </tr>
            <tr>
              <td>size</td>
              <td>small, standar, large</td>
              <td>false</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>String</td>
              <td>false</td>
            </tr>
            <tr>
              <td>value</td>
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
