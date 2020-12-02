import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { transform } from 'lodash'

const loaderStyle = { 
    // position:'absolute',
    top:'-30px'
    // transform: 'translateX(-30px)'
}
const Loader = () => {
    return (
        <div style={{ position:'relative'}}>
            <LinearProgress style={loaderStyle}/> 
        </div>
    )
}

export default Loader
