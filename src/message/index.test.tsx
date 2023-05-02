import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Message from './index';

describe("Message", () => {
  test('renders Message', () => {
    render(<Message>click me </Message>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
