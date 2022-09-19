import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Radio from './index';

describe("Radio", () => {
  test('renders Button', () => {
    render(<Radio>click me </Radio>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
/**
test('renders normal Radio', () => {
  const { container } = render(<Radio>click me</Radio>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
});

test('renders small Button', () => {
  const { container } = render(<Radio size='small'>click me</Radio>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
});
**/
