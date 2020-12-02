import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LibraryMusicSharpIcon from "@material-ui/icons/LibraryMusicSharp";
import { makeStyles } from "@material-ui/styles";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconButton } from "@material-ui/core";

// import {  TextField  } from "formik-material-ui"
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.appbar.main,
    marginBottom: '2em',
    
    title:{
      color:'white'
    }
    
  },
  
}))


const MenuBar = ( { children }) => {
  
  
  const classes = useStyles();

 
  // router object
  const router = useRouter()


  return (
    <>
      <AppBar className={classes.appbar} style={{ marginBottom:'2em'}} position="static"  >
        <Toolbar >
         
          
          <IconButton  onClick={() => router.push('/')}>
            <LibraryMusicSharpIcon fontSize="large"  style={{ color:'white'}} />
          </IconButton>
          
          <Typography variant="h5" className={classes.title}>
            Discography Finder
          </Typography>

         
        </Toolbar>
      </AppBar>

      
    </>
  );
};

export default MenuBar;

