import React, { useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import { Box, Divider, Typography } from "@material-ui/core";
import BandBanner from "./BandBanner";
import { Cancel } from '@material-ui/icons'
export default function BandDescription() {
  const { value } = useContext(AlbumContext);
  const { currentArtist } = value;
  return (
    <Box style={{ width: "80%" }}  justify="center">
      <BandBanner />
      <Box display="flex" justifyContent="start">
      <Typography variant="h6" color="textPrimary" style={{ flexGrow:1}}> Formed : <span> {currentArtist.intFormedYear} </span></Typography>
      <Typography variant="h6" color="textPrimary"> Disbanded  : <span> {currentArtist.intDiedYear ? currentArtist.intDiedYear : <Cancel />} </span></Typography>
      </Box>
      <Box display="flex" justifyContent="center" style={{ marginBottom:'2em'}}>
        <Typography variant="caption" style={{ flexGrow:1}}> Genre : {currentArtist.strGenre} </Typography> 
        <Typography variant="caption"> Style : {currentArtist.strStyle} </Typography> 
      </Box>
      <Divider /> 
      <Typography variant="caption" textAlign="center" style={{marginBottom:'2em'}}>{currentArtist.strBiographyEN}</Typography>
      <Divider /> 
    </Box>
  );
}
