import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import { waitFor } from "@testing-library/react-native";
import Icon from './index';

describe('Icon', () => {
  test('renders Icon', () => {
    const { getByTestId } = render(<Icon type="fixed">click me</Icon>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const eins = getByTestId("text");
    // eslint-disable-next-line testing-library/no-node-access
    expect(eins.children[0]).toEqual("click me");
    // const linkElement = screen.getByText(/click me/i);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    // expect(container.querySelector('.ant-icon-fixed')).toBeInTheDocument();

  })
  // waitFor(() => expect(getByText("Your-text")).toBeInTheDocument());

})

// test('renders fixed Icon', () => {
//   const { container } = render(<Icon type="fixed">click me</Icon>);
//   // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
//   expect(container.querySelector('.ant-icon-fixed')).toBeInTheDocument();
// });
