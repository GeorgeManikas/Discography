import React, { useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import { Box, Typography } from "@material-ui/core";
import BandBanner from "./BandBanner";

export default function BandDescription() {
  const { value } = useContext(AlbumContext);
  const { currentArtist } = value;
  return (
    <Box style={{ width: "80%" }} textAlign="left" justify="start">
      <BandBanner />
      <Typography variant="caption">{currentArtist.strBiographyEN}</Typography>
    </Box>
  );
}
