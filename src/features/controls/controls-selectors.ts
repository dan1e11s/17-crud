import { RootState } from '../../store';

export const selectSearch = (state: RootState) => state.controls.search;
export const selectLevel = (state: RootState) => state.controls.level;
export const selectControls = (state: RootState) => state.controls;
