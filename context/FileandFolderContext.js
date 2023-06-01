'use client';
import { createContext, useReducer } from 'react';

export const FileAndFolderContext = createContext();

const initialState = {
  filesAndFolders: [],
};
export const CREATE_NEW_FILE_OR_FOLDER_ACTION =
  'CREATE_NEW_FILE_OR_FOLDER_ACTION';
export const DELETE_FILE_OR_FOLDER_ACTION = 'DELETE_FILE_OR_FOLDER_ACTION';
const fileAndFolderReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_FILE_OR_FOLDER_ACTION:
      return {
        filesAndFolders: payload,
      };
    case DELETE_FILE_OR_FOLDER_ACTION:
      return {
        filesAndFolders: payload,
      };
    default:
      return state;
  }
};

export function FileAndFolderProvider(props) {
  const [state, dispatch] = useReducer(fileAndFolderReducer, initialState);

  return (
    <FileAndFolderContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FileAndFolderContext.Provider>
  );
}
