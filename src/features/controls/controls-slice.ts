import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Level } from '../../types/controls/controls';

type ControlsSlice = {
  search: string;
  level: Level | '';
};

const initialState: ControlsSlice = {
  search: '',
  level: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLevel: (state, action: PayloadAction<Level | ''>) => {
      state.level = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setSearch, setLevel, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
