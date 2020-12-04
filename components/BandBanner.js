import React, { useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import { Box } from "@material-ui/core";

export default function BandBanner() {
  const { value } = useContext(AlbumContext);
  const { currentArtist } = value;
  const { strArtistThumb, strArtistLogo } = currentArtist;
  return (
    <Box style={{ width: "90%" }} textAlign="left" justify="start">
      <img src={`${strArtistLogo}`} alt={`${strArtistThumb}`} />
    </Box>
  );
}
