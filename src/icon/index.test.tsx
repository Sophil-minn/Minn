import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './index';

describe('Icon', () => {
  test('renders Icon', () => {
    render(<Icon>click me </Icon>)
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  })
})

// test('renders fixed Icon', () => {
//   const { container } = render(<Icon>click me</Icon>);
//   // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
//   expect(container.querySelector('.ant-icon-fixed')).toBeInTheDocument();
// });

