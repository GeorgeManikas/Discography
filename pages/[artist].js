import { useRouter } from 'next/router' 

export default function Artist({ artistList }) {
    

    return (
        <pre>
            {JSON.stringify(artistList,null,4)}
        </pre>
    )
}



