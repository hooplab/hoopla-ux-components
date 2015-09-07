import expect from 'expect';
import React from 'react/addons';
import Table from '../../lib/components/Table';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Table {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Table', () => {
  it('should render a table component');
});
