import React, { useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import { Box } from "@material-ui/core";

export default function BandBanner() {
  const { value } = useContext(AlbumContext);
  const { currentArtist } = value;
  const { strArtistThumb, strArtistLogo } = currentArtist;
  return (
    <Box  textAlign="left" justify="center" alignItems="center">
      <img src={`${strArtistLogo}`} alt={`${strArtistThumb}`} style={{ width:'100%', objectFit:'cover' }} />
    </Box>
  );
}
