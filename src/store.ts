import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './features/users/users-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { useDispatch } from 'react-redux/es/exports';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    controls: controlsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
