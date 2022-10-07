import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Overlay from './index';

describe("Overlay", () => {
  test('renders Overlay', () => {
    render(<Overlay>click me </Overlay>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})
