import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Progress from './index';

describe("Progress", () => {
  test('renders Progress', () => {
    render(<Progress>click me </Progress>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
