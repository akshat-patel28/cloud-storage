"use client";
import { createContext, useReducer } from "react";

export const FileAndFolderContext = createContext();

const initialState = {
  filesAndFolders: [
    {
      path: "/",
      id: "newfolder",
      type: "folder",
      name: "New Folder",
      internalPath: "/newfolder",
    },
    {
      path: "/",
      id: "newFile",
      type: "file",
      name: "New File",
    },
    {
      path: "/newfolder",
      id: "newFile",
      type: "file",
      name: "New File 2",
    },
  ],
};

const fileAndFolderReducer = (state, { type, payload }) => {
  switch (type) {
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
