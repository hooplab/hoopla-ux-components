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
            <Button text="Button" />
            <Button type="primary" text="primary" />
            <Button type="success" text="success" />
            <Button type="warning" text="warning" />
            <Button type="danger" text="danger" />
          </div>
          <div className="span-full spacing-2">
            <Button text="Small Button" size="small"/>
            <Button text="Standard Button" size="standard" />
            <Button text="Large Button" size="large" />
          </div>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Button text={STRING} type={STRING} size={STRING} click={FUNCTION} />'}
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
                <td>text</td>
                <td>String</td>
                <td>true</td>
              </tr>
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
