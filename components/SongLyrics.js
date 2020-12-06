import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import VideoList from './VideoList'
import { useRouter } from 'next/router'

const SongLyrics = ({ lyrics, artist, title, videos  }) => {

    const router = useRouter()

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ marginTop:'3em'}}>
            <Button variant="contained" color="primary" onClick={()=> router.back()}> back...</Button>
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
