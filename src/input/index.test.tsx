import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from './index';

describe("Input", () => {
  test('renders Button', () => {
    render(<Input>click me </Input>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
/**
test('renders normal Input', () => {
  const { container } = render(<Input>click me</Input>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
});

test('renders small Button', () => {
  const { container } = render(<Input size='small'>click me</Input>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
});
**/
