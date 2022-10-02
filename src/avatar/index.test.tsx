import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Avatar from './index';

describe("Avatar", () => {
  test('renders Button', () => {
    render(<Avatar>click me </Avatar>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
/**
test('renders normal Avatar', () => {
  const { container } = render(<Avatar>click me</Avatar>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
});

test('renders small Button', () => {
  const { container } = render(<Avatar size='small'>click me</Avatar>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
});
**/
