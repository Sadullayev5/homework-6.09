import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      }
  }
});

export const { addUser , removeUser } = usersSlice.actions;
export default usersSlice.reducer;