import React from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/styles";
import { Facebook, Twitter, Web } from "@material-ui/icons";
import { blue, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    spacing: theme.spacing(2)
  },
  facebook: {
    background: blue[600],
    color: "white"
  },
  twitter: {
    background: blue[200],
    color: "white"
  },
  web: {
    background: green[500],
    color: "white"
  }
}));

const Social = ({ facebook, twitter, website }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="flex-start">
      <ButtonGroup>
        {/* <pre>{JSON.stringify(Facebook, null, 4)} </pre> */}
        <Button
          className={classes.facebook}
          onClick={() => window.open(`https://${facebook}`)}
        >
          <Facebook /> FaceBook
        </Button>
        <Button
          className={classes.twitter}
          onClick={() => window.open(`https://${twitter}`)}
        >
          <Twitter /> Twitter
        </Button>
        <Button
          className={classes.web}
          onClick={() => window.open(`https://${website}`)}
        >
          <Web /> Website
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Social;
