### Using the components

```js
import React, { Component } from 'react';
import { Button, Feedback } from 'hoopla-components';

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <Feedback type="success" header="All good">Oh yeah...</Feedback>
        <Button text="Submit" click={() => alert('Sure?')}/>
      </div>
    );
  }
}
```