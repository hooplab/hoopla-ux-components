import expect from 'expect';
import React from 'react/addons';
import Input from '../../src/components/Input';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Input {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Input', () => {
  it('should render a input component');
});
