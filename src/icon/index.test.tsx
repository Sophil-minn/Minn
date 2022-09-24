import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
// import { waitFor } from "@testing-library/react-native";
import Icon from './index';

describe('Icon', () => {
  test('renders Icon', () => {
    const { container } = render(<Icon type="fixed"/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    // const eins = getByTestId("text");
    // eslint-disable-next-line testing-library/no-node-access
    // expect(eins.children[0]).toEqual("click me");
    // const linkElement = screen.getByText(/click me/i);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector('svg')).toBeInTheDocument();

  })
  // waitFor(() => expect(getByText("Your-text")).toBeInTheDocument());

})

test('renders custom className', () => {
  const { container } = render(<Icon type="fixed" className='custom'/>);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('.custom')).toBeInTheDocument();
});

test('should support click', () => {
  const onClick = jest.fn();
  // const { container } = render(<Icon type="copy" onClick={onClick}/>);
  const linkElement = screen.getByRole('svg');
  fireEvent.click(linkElement);
  expect(onClick).toBeCalled();
})