import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './notes/slice';
import profileReducer from './profile/slice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    profile: profileReducer,
  },
});

(window as any).store = store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch