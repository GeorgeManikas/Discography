import { Box, Typography } from '@material-ui/core'
import React from 'react'
import VideoList from './VideoList'

const SongLyrics = ({ lyrics, artist, title, videos  }) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ marginTop:'3em'}}>
           <Box display="block">
               <Typography variant="h6" style={{padding:'1em', textTransform:'capitalize'}}> 
               <span>{artist} </span>
               - 
               <span> {title} </span>
               </Typography>
           </Box> 
           <Box display="block"  >
               <Typography noWrap align="center" variant="body1" component="p" style={{whiteSpace: 'pre-line'}}>  {lyrics ? lyrics : 'No lyrics found' }  </Typography>
           </Box>
           <VideoList videos={videos} /> 
        </Box>
    )
}

export default SongLyrics
