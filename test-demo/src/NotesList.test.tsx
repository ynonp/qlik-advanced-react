import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { NotesList } from './NotesList';

test('renders list of notes', () => {
  const notes = [
    { id: '1', text: 'hello world 1' },
    { id: '2', text: 'hello world 2' },
  ]
  
  render(<NotesList notes={notes} />)  
  screen.logTestingPlaygroundURL();

});
