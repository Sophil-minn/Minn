import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './index';

describe("Menu", () => {
  test('renders Menu', () => {
    render(<Menu>click me </Menu>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
