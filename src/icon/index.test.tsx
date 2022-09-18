import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import { waitFor } from "@testing-library/react-native";
import Icon from './index';

describe('Icon', () => {
  test('renders Icon', () => {
    render(<Icon>click me</Icon>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
  // waitFor(() => expect(getByText("Your-text")).toBeInTheDocument());

})

test('renders fixed Icon', () => {
  const { container } = render(<Icon>click me</Icon>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.ant-icon-fixed2')).toBeInTheDocument();
});

it("renders Icon", () => {
  const { container } = render(<Icon />);
  // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-container, testing-library/no-node-access
  expect(container.querySelectorAll('i')).toBeInTheDocument();
});