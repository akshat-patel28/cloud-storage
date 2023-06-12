import { createAction } from '@reduxjs/toolkit';

export const setFileAndFolderAction = createAction(
  'file-folder/setFileAndFolderAction'
);

export const addNewFileAndFolderAction = (data) => {
  return (dispatch, getState) => {
    const listData = [...getState().fileAndFolderRedux.filesAndFolders, data];
    dispatch(setFileAndFolderAction(listData));
  };
};

export const setRenamedFileAndFolderAction = (data) => {
  return (dispatch) => {
    dispatch(setFileAndFolderAction(data));
  };
};
