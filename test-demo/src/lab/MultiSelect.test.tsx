import React from 'react';
import { render, screen, act } from '@testing-library/react';
import MultiSelect from './MultiSelect';
import userEvent from '@testing-library/user-event';
import { createExternalModuleExport } from 'typescript';
import exp from 'constants';

test('shows the items', () => {
  const items = [
    { id: '1', text: 'one', checked: false },
    { id: '2', text: 'two', checked: true },
    { id: '3', text: 'three', checked: false },
  ];
  const noop = () => false;

  render(<MultiSelect items={items} onChange={noop} />);
  expect(screen.getByLabelText('two')).toBeChecked();
  expect(screen.getByLabelText('one')).not.toBeChecked();
});

test('shows the items', () => {
  const spy = jest.fn();
  const items = [
    { id: '1', text: 'one', checked: false },
    { id: '2', text: 'two', checked: true },
    { id: '3', text: 'three', checked: false },
  ];

  render(<MultiSelect items={items} onChange={spy} />);
  const two = screen.getByLabelText('two');
  userEvent.click(two);

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith('2', false);
});


