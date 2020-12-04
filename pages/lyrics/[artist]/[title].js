import SongLyrics from "../../../components/SongLyrics"

export default function Lyrics( { lyrics,artist,title, videos   }) {

    return (
        // <pre> {JSON.stringify(lyrics,null,4)} </pre>
        <SongLyrics lyrics={lyrics.lyrics} artist={artist} title={title} videos={videos}/> 
    )
}

export const getServerSideProps = async({ query }) =>{
    const { artist, title } = query

    const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    const lyrics = await res.json()
    // https://www.googleapis.com/youtube/v3/search?q=pink floyd if&key=AIzaSyC0qxMdainZTzlhFj1E6UupEcFRHFVcRsw
    const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${artist} ${title}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const videos = await videoResponse.json()
    return {
        props : {
            lyrics,
            videos , 
            artist ,
            title 

        }
    }
}