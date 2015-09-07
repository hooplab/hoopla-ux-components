import expect from 'expect';
import React from 'react/addons';
import Checkbox from '../../lib/components/Checkbox';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Checkbox {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Checkbox', () => {
  it('should render a checkbox component');
});
