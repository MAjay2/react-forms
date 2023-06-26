import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  users: [],
  number: 0,
  count: 10,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { ...action.payload, id: uuidv4() };
      state.users.push(newUser);
    },
    editUser: (state, action) => {
      const { id, updatedUser } = action.payload;
      state.users = state.users.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...updatedUser };
        }
        return contact;
      });
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
