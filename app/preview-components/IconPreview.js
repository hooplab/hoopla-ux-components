import React, { Component } from 'react';
import { Icon, Table } from '../../lib/HooplaComponents';

export default class IconPreview extends Component {
  render() {
    return (
      <div className="preview-component">
        <h1><a name="Icon">{'<Icon />'}</a></h1>

        <div>
          <p>Examples:</p>
          <Icon type="fa-check"/>
          <Icon type="fa-adjust"/>
          <Icon type="fa-bank"/>
          <Icon type="fa-beer"/>
        </div>

        <div>
          <p>Usage:</p>
          <pre>
            <code>
              {'<Icon type={STRING}/>'}
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
              <td><a href="https://fortawesome.github.io/Font-Awesome/icons/">here</a> (eg. "fa-bars")</td>
              <td>true</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
