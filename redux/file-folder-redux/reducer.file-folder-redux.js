import { createReducer } from '@reduxjs/toolkit';
import { setFileAndFolderAction } from './action.file-folder-redux';

const initialState = {
  filesAndFolders: [],
};
export const fileAndFolderReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFileAndFolderAction, (state, { payload }) => {
    state.filesAndFolders = payload;
  });
});
