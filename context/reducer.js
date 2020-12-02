import { FETCH_ALBUMS, CURRENT_ARTIST,RESET_TRACKS,RESET_STATE, CURRENT_IMAGE, FETCH_ARTIST } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
  
    case FETCH_ARTIST:
      return {
        ...state,
        artist: action.payload
      }  
      
    case CURRENT_ARTIST:
      return {
        ...state,
        currentArtist: action.payload
      };
    
    case RESET_TRACKS:
      return {
        ...state,
        albums : null
      }
    
    case RESET_STATE:
      return {
        ...state,
        albums : null,
        currentArtist: ''
      }
    case CURRENT_IMAGE:{
      return {
        ...state,
        currentImage : action.payload
      }
    }
    default:
      throw new Error("Unknown action type...");
  }
};

export default reducer;
