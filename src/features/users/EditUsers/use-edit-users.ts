import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserToEdit } from '../users-selectors';

import { User } from '../../../types/users/users';

type THandleInp = (
  e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
) => void;
export const useEditUser = (): [User | null, THandleInp] => {
  const { userToEdit } = useSelector(selectUserToEdit);
  const [values, setValues] = useState(userToEdit);

  useEffect(() => {
    setValues(userToEdit);
  }, [userToEdit]);

  const handleInp: THandleInp = (e) => {
    let obj = {
      ...values,
      [e.target.name]: e.target.value,
    };

    setValues(obj as User);
  };

  return [values, handleInp];
};
