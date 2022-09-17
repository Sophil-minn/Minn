import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';
import { fireEvent } from '../../node_modules/@storybook/testing-library/dist/cjs';

describe('Button', () => {
  test('renders Button', () => {
    render(<Button>click me </Button>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})

test('renders normal Button', () => {
  const { container } = render(<Button>click me</Button>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
});


test("renders primary Button", () => {
  const { container } = render(<Button type="primary">click me</Button>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
})

test('should support click', () => {
  const onClick = jest.fn();
  render(<Button type="primary" onClick={onClick}>click me</Button>)
  const linkElement = screen.getByText(/click me/i);
  fireEvent.click(linkElement);
  expect(onClick).toBeCalled();
})