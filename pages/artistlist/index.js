export default function ArtistList () {

    return (
        <h1> ArtistList </h1>
    )
}


export const getServerSideProps = async (props) => {

    // const res = await fetch(``)
    console.log(props)
    return {
        props: {
            artistList : 'P'
        }
    }
}