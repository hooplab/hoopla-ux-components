import expect from 'expect';
import React from 'react/addons';
import Radio from '../../src/components/Radio';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Radio {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Radio', () => {
  it('should render a radio button component');
});
