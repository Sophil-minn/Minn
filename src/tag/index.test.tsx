import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { waitFor } from "@testing-library/react-native";
import Tag from './index';

describe('Tag', () => {
  test('renders Tag', () => {
    const { container } = render(<Tag />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    // const eins = getByTestId("text");
    // eslint-disable-next-line testing-library/no-node-access
    // expect(eins.children[0]).toEqual("click me");
    // const linkElement = screen.getByText(/click me/i);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('span')).toBeInTheDocument();

  })
  // waitFor(() => expect(getByText("Your-text")).toBeInTheDocument());

})
