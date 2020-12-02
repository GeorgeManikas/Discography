import React from 'react';
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
  return (
    <div className={classes.root}>
      <Alert variant="filled" style={{textAlign:'center'}} severity="error">Artist was not found !!! </Alert>
      { setTimeout(()=> {
        router.push('/') 
      },20000) }
    </div>
  );
}