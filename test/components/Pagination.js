import expect from 'expect';
import React from 'react/addons';
import Pagination from '../../lib/components/Pagination';

const { TestUtils } = React.addons;

function setup(options) {
  const props = {
    ...options,
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Pagination {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  };
}

describe('Component:Pagination', () => {
  it('should render a Pagination component without dots', () => {
    const { output } = setup({currentPage: 3, total: 5});

    expect(output.type).toBe('div');
    expect(output.props.className).toBe('pagination');

    // console.log(output.props.children)
    const [leftarrow, numbers, rightarrow] = output.props.children;
    expect(leftarrow.props.children).toBe('«');
    expect(rightarrow.props.children).toBe('»');

    const [one, two, three, four, five] = numbers;
    expect(one.props.className).toBe('pagination-item');
    expect(two.props.className).toBe('pagination-item');
    expect(three.props.className).toBe('pagination-item pagination-active');
    expect(four.props.className).toBe('pagination-item');
    expect(five.props.className).toBe('pagination-item');
  });

  xit('should render a Pagination component with dots', () => {
    const { output } = setup({currentPage: 7, total: 15});

    const [, content] = output.props.children;
    // TODO
  })
});
