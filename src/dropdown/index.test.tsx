import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from './index';

describe("Dropdown", () => {
  test('renders Dropdown', () => {
    render(<Dropdown>click me </Dropdown>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
