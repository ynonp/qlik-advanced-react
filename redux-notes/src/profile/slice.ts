/**
 * Please create a new slice to manage user's profiles
 * It should save the username and email
 * It should provide an action changeUser
 * that takes a payload of { name: newName, email: newEmail }
 * 
 * After you create the slice add it to the main reducer,
 * and use the browser's devtools to verify it works
 * 
 * Finally create a component that shows the current user name
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeUser, randomizeUser } from './actions';

 interface User {
   id: number;
   name: string;
   email: string;
 }
 
 interface UserState {
   user: User;
 }
 
 const initialState: UserState = {
   user: {
     id: 0,
     name: 'Guest',
     email: 'N/A',
   },
 };
 
 const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
   },
   extraReducers: (builder) => {
    builder.addCase(changeUser, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(randomizeUser.fulfilled, (state, action) => {
      
    });    
   }
 });
 
 export const actions = userSlice.actions;
 (window as any).userActions = userSlice.actions;
 
 export default userSlice.reducer;
 