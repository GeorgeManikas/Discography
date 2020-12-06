import {
  
  Card,
  
  List,
  ListItem,
  IconButton,
  Modal,
  Paper,
  CardMedia,
  
  Grid,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'
import { ExpandMore } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import AlbumContext from "../context/AlbumContext";
import Link from "next/link";
import * as _ from "lodash";

// Modal Styling 
const useStyles = makeStyles( theme => ({
    modal:{
        width:'90%',
        margin:'auto',
        overflow: 'scroll'
    }
}))
const AlbumList = () => {

  const classes = useStyles()  
  const { value } = useContext(AlbumContext);
  const [trackListCollapsed, setTrackListCollapsed] = useState(false);
  const [album, setCurrentAlbum] = useState("");
  const [trackExpanded, setTrackExpanded] = useState(false);

  const handleCollapseClick = (alb) => {
    setCurrentAlbum(alb);
    console.log("Album: ", album);
    setTrackExpanded(true);
  };
  if (!value.currentArtist.albums) return null;
  return (
    <>
      <Grid container spacing={1}>
        {_.sortBy(value.currentArtist.albums, "intYearReleased").map(
          (album) => (
            <Grid
              item
              xs={6}
              md={4}
              lg={3}
              key={album.idAlbum}
              style={{ zIndex: "10" }}
              style={{ marginBottom: "1em" }}
            >
              <Card style={{ padding: 0 }}>
                <CardHeader
                  title={album.strAlbum}
                  subheader={album.intYearReleased}
                  noWrap
                  action={
                    <IconButton
                      size="medium"
                      edge="start"
                      color="secondary"
                      onClick={() => handleCollapseClick(album)}
                    >
                      <ExpandMore />
                    </IconButton>
                  }
                />
                <CardMedia>
                  <img
                    src={
                      album.strAlbumThumb
                        ? album.strAlbumThumb
                        : "/not_found.png"
                    }
                    alt={album.strAlbum}
                    style={{ width: "100%", zIndex: "1" }}
                  />
                </CardMedia>
              </Card>
            </Grid>
          )
        )}
      </Grid>

      { album && 
        <Modal className={classes.modal} open={trackExpanded} onClose={() => setTrackExpanded(false)}>
        <Paper style={{ height:'auto'}}>
            <List>
            
                {album.tracks.map(track => (
                    
                    <ListItem button key={track.idTrack}> 
                    <Link href="/lyrics/[artist]/[title]" as={`/lyrics/${track.strArtist}/${track.strTrack}`} passHref>
                    <a style={{ textDecoration:'none', textDecorationColor:'none !important'}}>{track.strTrack} </a>
                    </Link>
                    
                    </ListItem>
                ))}
            </List>
        </Paper>
      </Modal>
      
      }
      
    </>
  );
};

export default AlbumList;
