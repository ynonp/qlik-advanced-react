import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const changeUser = createAction('users/changeUser', 
  (payload) => ({ payload }));

export const randomizeUser = createAsyncThunk('users/random',
  async ({ name }: { name: string }, { dispatch, getState }) => {
    const r = await fetch('http://numbersapi.com/random/math');
    const text = await r.text();    
    const id = text.split(' ')[0];

    return ({
      id,
      name,
      email: `${name}@gmail.com`,
    })
  });

(window as any).changeUser = changeUser;
(window as any).randomizeUser = randomizeUser;