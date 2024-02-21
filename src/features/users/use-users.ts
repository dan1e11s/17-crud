import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUsers } from './user-actions';
import { selectVisibleUsers } from './users-selectors';
import { RootState, useAppDispatch } from '../../store';
import { User } from '../../types/users/users';
import { selectControls } from '../controls/controls-selectors';

export const useUsers = (): [User[]] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const users = useSelector((state: RootState) =>
    selectVisibleUsers(state, controls)
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return [users];
};
