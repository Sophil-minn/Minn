import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './index';
const CheckboxGroup = Checkbox.Group;

describe("Checkbox", () => {
  test('renders Button', () => {
    render(<Checkbox>click me </Checkbox>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })


  test('should support click', () => {
    const onChange = jest.fn();
    render(<CheckboxGroup onChange={onChange}>
        <Checkbox value="1">click me</Checkbox>
        <Checkbox value="2">click 2</Checkbox>
      </CheckboxGroup>
    );
  
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
  
    expect(onChange).toBeCalled();
  });

})
/**
test('renders normal Checkbox', () => {
  const { container } = render(<Checkbox>click me</Checkbox>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
});

test('renders small Button', () => {
  const { container } = render(<Checkbox size='small'>click me</Checkbox>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
});
**/
