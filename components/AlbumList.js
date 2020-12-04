import { GridList, GridListTile, GridListTileBar, Fab, Dialog, DialogTitle ,List, ListItem } from '@material-ui/core'
import { Audiotrack } from '@material-ui/icons'
import React, { useState, useContext } from 'react'
import AlbumContext from '../context/AlbumContext'
import { useRouter } from 'next/router'
import * as _ from 'lodash'
const AlbumList = () => {

    const { value } = useContext(AlbumContext)
    const router = useRouter()
    const [ isDialogOpen, setIsDialogOpen] = useState(false)
    const [currentAlbum ,setCurrentAlbum] = useState('')
    const handleDialogClose = () => {
        setCurrentAlbum('')
        setIsDialogOpen(false)
    }

    const handleDialogOpen = (alb) => {
        setCurrentAlbum(alb)
        setIsDialogOpen(true)
    }
    if (!value.currentArtist.albums) return null 
    return (
        <>
          <GridList cellHeight={280} >
              { _.sortBy(value.currentArtist.albums,'intYearReleased').map( album => (
                  <GridListTile key={album.idAlbum}>
                      <img src={album.strAlbumThumb ? album.strAlbumThumb : '/not_found.png'} alt={album.strAlbum} style={{ width:'100%', height:'100%', objectFit:'contain'}} />
                      <GridListTileBar 
                        title={album.strAlbum} 
                        subtitle={album.intYearReleased} 
                        actionIcon={ <Fab color="secondary" variant="extended" style={{ marginRight:'1em'}} onClick={(album) => setIsDialogOpen(true)}>
                                        <Audiotrack htmlColor="white"/> 
                                        <small style={{ color:'white'}}> Track List</small>
                                    </Fab>}></GridListTileBar>
                  </GridListTile>
              ))}
          </GridList> 
          { currentAlbum && 
            <Dialog onClose={handleDialogClose} open={isDialogOpen}>
              <DialogTitle> Track List </DialogTitle>
              <List>
                  {currentAlbum.tracks.map( track => (
                      <ListItem key={track.idTrack}> {track.strTrack} </ListItem>
                  ))}
              </List>
          </Dialog>
          }
          
        </>
    )
}

export default AlbumList
