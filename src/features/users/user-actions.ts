import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/users/users';
import axios from 'axios';

export const getUsers = createAsyncThunk<User[], undefined>(
  '@@users/get-users',
  async () => {
    const { data } = await axios('http://localhost:8000/users');

    return data;
  }
);

export const createUser = createAsyncThunk(
  '@@users/create-user',
  async (obj: User) => {
    const { data } = await axios.post('http://localhost:8000/users', obj);

    return data;
  }
);

export const updateUser = createAsyncThunk(
  '@@users/update-user',
  async (newUser: User) => {
    const { data } = await axios.patch(
      `http://localhost:8000/users/${newUser.id}`,
      newUser
    );
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  '@@users/delete-user',

  async (id: string, { dispatch }) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    dispatch(getUsers());
  }
);
