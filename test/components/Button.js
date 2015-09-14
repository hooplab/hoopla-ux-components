import expect from 'expect';
import React from 'react/addons';
import Button from '../../src/components/Button';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    text: 'button',
    click: expect.createSpy(),
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Button {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Button', () => {
  it('should render a button', () => {
    const { output } = setup();

    expect(output.type).toBe('button');
    expect(output.props.className).toBe('button button-default button-standard');
  });

  it('should handle small size', () => {
    const { output } = setup({size: 'small'});
    expect(output.props.className).toBe('button button-default button-small');
  });

  it('should handle large size', () => {
    const { output } = setup({size: 'large'});
    expect(output.props.className).toBe('button button-default button-large');
  });

  it('should handle different types', () => {
    const { output } = setup({type: 'danger'});
    expect(output.props.className).toBe('button button-danger button-standard');
  });

  it('should call click prop on clicked', () => {
    const { output, props } = setup();

    output.props.onClick();
    output.props.onClick();

    expect(props.click.calls.length).toBe(2);
  });
});
