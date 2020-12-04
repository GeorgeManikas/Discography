import React, { useEffect, useContext, useState } from "react";
import AlbumContext from "../context/AlbumContext";
import { FETCH_ARTIST, CURRENT_ARTIST } from "../context/types";
import {
  List,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  ListItem,
  Grid,
  Tabs,
  Tab,
  AppBar,
  Paper
} from "@material-ui/core";
import ArtistNotFound from "./ArtistNotFound";
import Social from "./Social";
import TabItem from "./TabItem";
import BandDescription from "./BandDescription";

const ArtistList = ({ artistList }) => {
  const [artistFound, setArtistFound] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(artistList[0].idArtist);
  const { value, dispatch } = useContext(AlbumContext);
  const { currentArtist } = value;
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    if (artistList[0].artist === "not found") setArtistFound(false);
    dispatch({ type: CURRENT_ARTIST, payload: artistList[0] });
  }, []);

  const handleClick = (e, artist) => {
    setCurrentIndex(artist.idArtist);
    dispatch({ type: CURRENT_ARTIST, payload: artist });
  };

  const handleTabChange = (e, index) => {
    setTabValue(index);
  };

  return (
    <>
      {!artistFound ? (
        <ArtistNotFound />
      ) : (
        <Box mx={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={3} lg={4}>
              <List component="nav">
                {artistList.map((artist) => (
                  <ListItem
                    button
                    selected={currentIndex === artist.idArtist}
                    key={artist.idArtist}
                    onClick={(e) => handleClick(e, artist)}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={artist.strArtist}
                        src={artist.strArtistThumb}
                      />
                    </ListItemAvatar>
                    <ListItemText>{artist.strArtist}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
              <Paper>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  color="primary"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="band info" />
                  <Tab label="discography" />
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={4} />
            <Grid item xs={12} md={9} lg={8}>
              <TabItem value={tabValue} index={0}>
                <Social
                  facebook={currentArtist.strFacebook}
                  twitter={currentArtist.strTwitter}
                  website={currentArtist.strWebsite}
                />
                <BandDescription />
              </TabItem>
            </Grid>

            {/* <pre> {JSON.stringify(artistList, null,4)} </pre> */}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ArtistList;
