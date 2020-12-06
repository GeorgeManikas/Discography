import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import { BottomNavigation, Box, Grid, Typography } from '@material-ui/core'
import Link from 'next/link'
import { Email, GitHub, Facebook, LinkedIn  } from '@material-ui/icons'

// footer styling
const useStyles = makeStyles( theme => ({
    container: {
        position:'static',
        // width:'100% !important',
        height:'auto',
        bottom:'0',
        left:'0',
        padding:'5em',
        background: 'rgba(0,0,0,0.8)',
        color:'white',
    },
    contact:{
        textAlign:'right',
        padding:'0.6em',
        [theme.breakpoints.down('md')] : {
            textAlign:'left'
        },
        
        
    }
}))

const Footer = () => {
    const classes=useStyles()
    return (
        <BottomNavigation  className={classes.container}>
        <Container maxWidth="xl">
        <Grid container>
        <Grid item xs={12} md={6}>
        <Box style={{ marginTop:'2em'}}>
            <Typography variant="body1" ><a style={{ textDecoration:'none', color:'#fff'}} href="/"> Created using  &reg;&trade; Next JS React Framework  </a></Typography>
            <Typography variant="body1" > styled using &reg;&trade;Material UI FrameWork  </Typography>
            <Typography variant="body1" > Data fetched using : &reg;&trade;Api Db API , &copy;Google Youtube API , &copy;Lyrics OVH API  </Typography>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} style={{ flexGrow:1}} className={classes.contact} >
        <Box style={{ marginTop:'2em'}}>
        <Typography variant="h6"> George Manikas : </Typography>
            <Link href="mailto:georman@outlook.com">
            <a style={{ textDecoration:'none', color:'#fff'}}> <Email />   </a>
             </Link>
             <Link href="https://github.com/GeorgeManikas" >
            <a style={{ textDecoration:'none', color:'#fff'}} target="_blank" > <GitHub /> </a>
             </Link>
             <Link href="https://www.facebook.com/george.manikas.1a" >
            <a style={{ textDecoration:'none', color:'#fff'}} target="_blank" > <Facebook /> </a>
             </Link>
             <Link href="https://www.linkedin.com/in/george-manikas-004103124/" >
            <a style={{ textDecoration:'none', color:'#fff'}} target="_blank" > <LinkedIn /> </a>
             </Link>
        </Box>
        </Grid>
        </Grid>
        </Container>
        </BottomNavigation>
    )
}

export default Footer
