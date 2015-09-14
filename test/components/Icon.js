import expect from 'expect';
import React from 'react/addons';
import Icon from '../../src/components/Icon';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Icon {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Icon', () => {
  it('should render a Icon button component', () => {
    const { output } = setup({type: 'fa-check'});

    expect(output.type).toBe('i');
    expect(output.props.className).toBe('fa fa-check');
  });
});
