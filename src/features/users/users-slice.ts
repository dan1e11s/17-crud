import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/users/users';
import { getUsers, createUser, deleteUser, updateUser } from './user-actions';

interface IUsers {
  users: User[];
  userToEdit: null | User;
}

const initialState: IUsers = {
  users: [],
  userToEdit: null,
};

const usersSlice = createSlice({
  name: '@@users',
  initialState,
  reducers: {
    setUserToEdit: (state, action) => {
      state.userToEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((item: any) => item.id !== id);
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const { id, name, username, level } = action.payload;
      const foundUser = state.users.find((user) => user.id === id);
      if (foundUser) {
        foundUser.name = name;
        foundUser.username = username;
        foundUser.level = level;
      }
    });
  },
});

export const { setUserToEdit } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
