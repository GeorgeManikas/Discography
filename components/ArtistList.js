import React, { useEffect, useContext, useState  } from 'react'
import AlbumContext from '../context/AlbumContext'
import { FETCH_ARTIST, CURRENT_ARTIST  } from '../context/types'
import { List, ListItemAvatar, ListItemText, Avatar, Box, ListItem, Grid} from '@material-ui/core'
import ArtistNotFound from './ArtistNotFound'
import Social from './Social'

const ArtistList = ({ artistList }) => {
    const [ artistFound, setArtistFound ] = useState(true)
    const [ currentIndex, setCurrentIndex ] = useState(artistList[0].idArtist)
    const {value, dispatch } = useContext(AlbumContext)
    const { currentArtist} = value
    useEffect(()=> {
        if ( artistList[0].artist === 'not found') setArtistFound(false)
        dispatch({type:CURRENT_ARTIST, payload : artistList[0]})
    },[])

    const handleClick = (e, artist) => {
        setCurrentIndex(artist.idArtist)
        dispatch({ type:CURRENT_ARTIST, payload:artist})
    }

    return (
        <>
        {!artistFound ? <ArtistNotFound /> :
        <Box mx={3}>
        <Grid container spacing={1}>
        
        <Grid item xs={12} md={3} lg={4}>
        <List component="nav">
            {artistList.map( artist => (
                <ListItem button  selected={currentIndex === artist.idArtist} key={artist.idArtist} onClick={(e) => handleClick(e, artist)}>
                <ListItemAvatar >
                    <Avatar alt={artist.strArtist} src={artist.strArtistThumb} />
                </ListItemAvatar>
                <ListItemText>
                    {artist.strArtist}
                </ListItemText>
                </ListItem>
            ))}
        </List>
        </Grid>

        <Grid item xs={12} md={3}>
            <Social facebook={currentArtist.strFacebook} twitter={currentArtist.strTwitter} website={currentArtist.strWebsite} /> 
        </Grid>

        {/* <pre> {JSON.stringify(artistList, null,4)} </pre> */}
        </Grid>
        </Box>
        }
        
        
        </>
    )
}

export default ArtistList
