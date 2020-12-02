import React from 'react'
import Youtube from 'react-youtube'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    video:{
        padding:'0.4em',
        
    }
}))
const VideoList = ({ videos }) => {

    const opts = {
        height: '200',
        width: '200',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

      const classes= useStyles()
    return (
        <Box  display="flex" flexWrap="wrap" justifyContent='center' padding={2} >
            {videos.items.map( video => (
                <Youtube  className={classes.video} key={video.id.videoId} videoId={video.id.videoId} opts={opts} onReady={(e) => e.target.pauseVideo()}/>
            ))}
        </Box>
    )
}

export default VideoList
