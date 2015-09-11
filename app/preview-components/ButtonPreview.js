import React, { Component } from 'react';
import { Button, Table } from '../../lib/HooplaComponents';

export default class ButtonPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Button">{'<Button />'}</a></h1>

        <div>
          <p>Examples:</p>
          <div className="span-full spacing-1">
            <Button>Button</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
          </div>
          <div className="span-full spacing-2">
            <Button size="small">Small Button</Button>
            <Button size="standard">Standard Button</Button>
            <Button size="large">Large Button</Button>
          </div>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Button type={STRING} size={STRING} click={FUNCTION}>Content</Button>'}
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
                <td>type</td>
                <td>default, primary, success, warning, danger</td>
                <td>false</td>
              </tr>
              <tr>
                <td>click</td>
                <td>Function</td>
                <td>false</td>
              </tr>
              <tr>
                <td>size</td>
                <td>small, standard, large</td>
                <td>false</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
