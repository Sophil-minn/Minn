import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Switch from './index';

describe("Switch", () => {

  test('should support under control', () => {
    const onChange = jest.fn();
    render(<Switch checked data-testid="t2" onChange={onChange} />);
  
    const linkElement = screen.getByTestId('t2');
    expect(linkElement.getAttribute('class')).toBe('ant-switch ant-switch-checked');
  
    fireEvent.click(linkElement, {});
    expect(onChange).toBeCalledTimes(1);
    expect(linkElement.getAttribute('class')).toBe('ant-switch ant-switch-checked');
  });
})
