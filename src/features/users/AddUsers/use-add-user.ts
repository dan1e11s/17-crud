import { useState } from 'react';
import { User } from '../../../types/users/users';

type THandleInp = (
  e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
) => void;

export const useAddUsers = (): [User, THandleInp, () => void] => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    level: 'Junior',
  });

  const handleInp = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    let obj = {
      ...user,
      [event.target.name]: event.target.value,
    };

    setUser(obj);
  };

  const emptyFields = () => {
    setUser({
      name: '',
      username: '',
      level: 'Junior',
    });
  };

  return [user, handleInp, emptyFields];
};
