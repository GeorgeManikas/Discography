import React, { useReducer } from "react";
import AlbumContext from "./AlbumContext";
import reducer from "./reducer";

const AlbumState = ({ children }) => {
  const initialState = {
    albums: null,
    artist : null,
    currentArtist: null,
    currentImage:""
  };

  const [value, dispatch] = useReducer(reducer, initialState);
  return (
    <AlbumContext.Provider value={{ value, dispatch }}>
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumState;
