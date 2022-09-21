import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Radio from './index';

describe("Radio", () => {
  test('renders Button', () => {
    render(<Radio>click me </Radio>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
  test('should support onChange', () => {
    const onChange = jest.fn();
    render(<Radio onChange={onChange}>click me</Radio>);
  
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
  
    expect(onChange).toBeCalled();
  });
  
  test('should support under control', () => {
    const onChange = jest.fn();
    render(<Radio checked onChange={onChange}>click me</Radio>);
  
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onChange).toBeCalledTimes(0);
  });
})
