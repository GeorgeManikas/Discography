import { Box, GridList, GridListTile, Modal  } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import AlbumContext from '../context/AlbumContext'

const Photos = () => {
    const [photo,setPhoto] = useState(null)
    const [openPhoto, setOpenPhoto] = useState(false)
    const { value } = useContext(AlbumContext)

    const handlePhotoClick = (photo) => {
        setPhoto(photo)
        setOpenPhoto(true)
    }
    return (
        <div>
            {/* <pre>{JSON.stringify(value,null,4)} </pre> */}
            <Box> <img src={value.currentArtist.strArtistBanner} style={{width:'100%', objectFit:'cover'}} /> </Box>
            <Box>
            <GridList cols={2} >
                <GridListTile style={{ cursor:'pointer'}} onClick={() => handlePhotoClick(value.currentArtist.strArtistFanart)}>
                <img src={value.currentArtist.strArtistFanart} />
                </GridListTile>
                <GridListTile style={{ cursor:'pointer'}} onClick={() => handlePhotoClick(value.currentArtist.strArtistFanart2)}>
                <img src={value.currentArtist.strArtistFanart2} />
                </GridListTile>
                <GridListTile style={{ cursor:'pointer'}} onClick={() => handlePhotoClick(value.currentArtist.strArtistFanart3)}>
                <img src={value.currentArtist.strArtistFanart3} />
                </GridListTile>
                <GridListTile style={{ cursor:'pointer'}} onClick={() => handlePhotoClick(value.currentArtist.strArtistClearart)}>
                <img src={value.currentArtist.strArtistClearart} />
                </GridListTile>
            </GridList>
            </Box>

            { photo !== null && 
                <Modal open={openPhoto} onClose={()=> setOpenPhoto(false)} style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box style={{width:'90%'}}>
                    <img src={photo} alt={photo} style={{width:'100%' , minHeight:'100%'}} /> 
                </Box>
            </Modal>
            }
            
        </div>
    )
}

export default Photos

// "strArtistThumb": "https://www.theaudiodb.com/images/media/artist/thumb/qyuqvy1375623610.jpg",
//         "strArtistLogo": "https://www.theaudiodb.com/images/media/artist/logo/qpyytr1358936063.png",
//         "strArtistClearart": "https://www.theaudiodb.com/images/media/artist/clearart/qtrxwt1517261228.png",
//         "strArtistWideThumb": "https://www.theaudiodb.com/images/media/artist/widethumb/suswry1517261215.jpg",
//         "strArtistFanart": "https://www.theaudiodb.com/images/media/artist/fanart/metallica-4dceb566a1fef.jpg",
//         "strArtistFanart2": "https://www.theaudiodb.com/images/media/artist/fanart/qqqyrp1379986437.jpg",
//         "strArtistFanart3": "https://www.theaudiodb.com/images/media/artist/fanart/wyrrtx1345649903.jpg",
//         "strArtistBanner": "https://www.theaudiodb.com/images/media/artist/banner/uwrurq1349458918.jpg",