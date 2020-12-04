import React, { useContext } from 'react';
import AlbumContext from '../context/AlbumContext'
import { RESET_STATE } from '../context/types'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useRouter } from 'next/router'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop:0,
    transform:'translateY(-25px)',
    '& > * + *': {
      marginTop: 0,
    },
  },
}));

export default function ArtistNotFound() {
  const classes = useStyles();
  const router = useRouter()

  const { dispatch } = useContext(AlbumContext)
  return (
    <div className={classes.root}>
      <Alert variant="filled" style={{textAlign:'center'}} severity="error">Artist was not found !!! </Alert>
      { setTimeout(()=> {
        dispatch({ type: RESET_STATE})
        router.push('/') 
      },2000) }
    </div>
  );
}