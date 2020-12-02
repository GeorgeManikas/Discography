import React, {  useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import TrackList from "../components/TrackList";
import { useRouter } from "next/router";
const Tracklist = () => {
  const { value } = useContext(AlbumContext);
  const { tracks, currentImage } = value;
  const router = useRouter();
  return (
    // <pre>{JSON.stringify(value, null, 4)}</pre>
    <TrackList tracks={tracks} currentImage = {currentImage} />
  );
};

export default Tracklist;
