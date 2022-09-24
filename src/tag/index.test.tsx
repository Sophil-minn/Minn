import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
    test('renders Tag', () => {
      render(<Tag>click me </Tag>)
      const linkElement = screen.getByText(/click me/i);
      expect(linkElement).toBeInTheDocument();
    })
  })


test('should support onClose', () => {
  const onClose = jest.fn();
  // const { container } =  render(<Tag onClose={onClose}>close me</Tag>)
  const linkElement = screen.getByRole('span');
  fireEvent.click(linkElement);
  expect(onClose).toBeCalled();
})