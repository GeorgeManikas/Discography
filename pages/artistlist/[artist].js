import * as _ from "lodash";
import ArtistList from "../../components/ArtistList";
import Loader from "../../components/Loader";

export default function ArtistSearch({ artistList }) {
  
  return (
      // <pre> {JSON.stringify(artistList, null, 4)} </pre>
    <ArtistList artistList={artistList} />
  );
}

// `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query.artist}` 
//`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist.strArtist}`
// `https://theaudiodb.com/api/v1/json/1/track.php?m=${alb.idAlbum}`
export const getServerSideProps = async ({ query }) => {
  let artistList = {}
  let final
  const res = await fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query.artist}`)
  const data = await res.json()
  if (data.artists ) {
    let albumList = await Promise.all( 
      data.artists.map( async artist => {
        const res= await fetch(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artist.strArtist}`)
        const albums =  await res.json()
        artist.albums = albums.album
        return  artist
      })
    )
  
    artistList = albumList
  
    await Promise.all(artistList.map(  async alb => {
      await Promise.all(
      alb.albums.map(async  album => {
        const res = await fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=${album.idAlbum}`)
        const tracks = await res.json()
        album.tracks = tracks.track
        return album
      }))}))
     
    final = artistList
  }else 
      final = [{ artist:'not found'}]
  
   return {
     props : {
        artistList: final
      }
    };
  }