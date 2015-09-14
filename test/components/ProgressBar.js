import expect from 'expect';
import React from 'react/addons';
import ProgressBar from '../../src/components/ProgressBar';

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
  it('should render a progress bar component', () => {
    const { output } = setup({value: 50});
    const [ icon, content ] = output.props.children;

    expect(output.type).toBe('div');
    expect(icon.props.className).toBe('progress--bar');
    expect(icon.props.style.width).toBe('50%');
    expect(content).toBe(undefined);
  });

  it('should display the value as text in a large progress bar', () => {
    const { output } = setup({size: 'large', value: 50});
    const [ , content ] = output.props.children;

    expect(content.type).toBe('div');
    expect(content.props.className).toBe('progress-text');
    expect(content.props.children.join('')).toBe('50%');
  });
});
