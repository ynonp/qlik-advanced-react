// notes/slice.ts
import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createNote } from './actions';
import { changeUser } from '../profile/actions';

interface Note {
  id: string;
  text: string;
}

export interface NotesState {
  notes: Array<Note>,
}

const initialState: NotesState = {
  notes: [
    { id: nanoid(), text: 'Hello World' },
  ]
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {        
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(n => n.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createNote, (state, action) => {
      state.notes.push(action.payload);
    });

    builder.addCase(changeUser, () => {
      return initialState;
    });
  }
})

// Action creators are generated for each case reducer function
export const actions = notesSlice.actions;

(window as any).actions = notesSlice.actions;

export default notesSlice.reducer