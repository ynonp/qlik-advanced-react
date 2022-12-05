// notes/slice.ts
import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
    createNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(n => n.id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const actions = notesSlice.actions;

(window as any).actions = notesSlice.actions;

export default notesSlice.reducer