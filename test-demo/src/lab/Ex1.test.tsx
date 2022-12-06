import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeter, { DEFAULT_NAME } from './Ex1';

test('renders with name', () => {
  render(<Greeter name="ynon" />);
  expect(screen.getByText(/hello ynon/i)).toBeInTheDocument();
});

test('renders with default name', () => {
  render(<Greeter />);
  expect(screen.getByText(`Hello ${DEFAULT_NAME}`)).toBeInTheDocument();
});

