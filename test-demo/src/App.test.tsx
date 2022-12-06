import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('button starts at zero', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: '0' });
  expect(buttonElement).toBeInTheDocument();
});

test('click increases the number', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: '0' });
  userEvent.click(buttonElement);
  userEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent('2');
});
