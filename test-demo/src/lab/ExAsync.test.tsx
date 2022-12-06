import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Timer from './ExAsync';
import userEvent from '@testing-library/user-event';

test('starts empty', () => {
  render(<Timer ms={1000} />);
  expect(screen.getByText(/0/)).toBeInTheDocument();
});

test('starts empty', async () => {
  jest.useFakeTimers();
  render(<Timer ms={5000} />);
  act(() => {
    jest.advanceTimersByTime(5000);
  });

  expect(screen.getByText(/1/)).toBeInTheDocument();
});