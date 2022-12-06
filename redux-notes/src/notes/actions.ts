import { createAction, nanoid } from "@reduxjs/toolkit";

export const createNote = createAction('notes/createNote',
(text: string) => {
  return ({
    payload: {
      id: nanoid(),
      text,      
    }
  })
});

(window as any).createNote = createNote;