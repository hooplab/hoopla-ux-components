import expect from 'expect';
import React from 'react/addons';
import Feedback from '../../lib/components/Feedback';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Feedback {...props}>Content</Feedback>);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Feedback', () => {
  it('should render a feedback component');
});
