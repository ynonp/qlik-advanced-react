import React from 'react';
import { render, screen } from '@testing-library/react';
import TextBoxes from './Ex3';
import userEvent from '@testing-library/user-event';

test('starts empty', () => {
  render(<TextBoxes />);
  const boxes = screen.getAllByRole('textbox');
  expect(boxes.length).toBeGreaterThan(1);
});

test('type in 3, copy to 1', () => {
  render(<TextBoxes />);
  const boxes = screen.getAllByRole('textbox');
  userEvent.type(boxes[3], 'hello');

  expect(boxes[1]).toHaveValue('hello');
});
