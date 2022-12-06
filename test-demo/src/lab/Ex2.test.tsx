import React from 'react';
import { render, screen } from '@testing-library/react';
import CountingBox from './Ex2';
import userEvent from '@testing-library/user-event';

test('starts empty', () => {
  render(<CountingBox />);
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('type something in the box, and show the length', () => {
  render(<CountingBox />);
  userEvent.type(screen.getByRole('textbox'), 'hello');
  expect(screen.getByText(/5/)).toBeInTheDocument();
});

