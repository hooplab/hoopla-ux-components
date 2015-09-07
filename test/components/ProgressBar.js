import expect from 'expect';
import React from 'react/addons';
import ProgressBar from '../../lib/components/ProgressBar';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<ProgressBar {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:ProgressBar', () => {
  it('should render a progress bar component');
});
