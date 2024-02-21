import { Level } from '../../../types/controls/controls';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store';

import { selectLevel } from '../controls-selectors';
import { setLevel } from '../controls-slice';
import { ChangeEvent } from 'react';

type onSelect = (event: ChangeEvent<HTMLSelectElement>) => void;

export const useLevel = (): [Level | '', onSelect] => {
  const dispatch = useAppDispatch();
  const level = useSelector(selectLevel);

  const handleSelect: onSelect = (event) => {
    if (event) {
      dispatch(setLevel(event.target.value as Level));
    } else {
      dispatch(setLevel(''));
    }
  };

  return [level, handleSelect];
};
