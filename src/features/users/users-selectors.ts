import { RootState } from '../../store';

export const selectUserToEdit = (state: RootState) => state.users;

export const selectVisibleUsers = (
  state: RootState,
  { search = '', level = '' }
) => {
  if (level === 'All') {
    return state.users.users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return state.users.users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      user.level.includes(level)
  );
};
