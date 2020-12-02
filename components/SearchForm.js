import React, {useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Typography, Box } from '@material-ui/core'
import { InputAdornment } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import AlbumContext from '../context/AlbumContext'
import { CURRENT_ARTIST, RESET_STATE } from '../context/types'
import { useRouter } from 'next/router'

// styling components 
const useStyles = makeStyles( theme => ({
    box:{
        display:'flex',
        flexDirection:'column',
        padding:'4em',
        justifyContent:'center',
        border:`1px solid ${theme.palette.primary.light}`,
        borderRadius: '8px',
        // background: theme.palette.primary.dark,
        [ theme.breakpoints.down('md')]: {
            width:'90%'
        },
        [ theme.breakpoints.up('lg') ]:{
            width:'40%'
        }
    },
    typography: {
        color: theme.palette.primary.dark,
        textAlign:'center'
    }
}))

const validationSchema = Yup.object().shape({
    artist: Yup.string().required("Must provide artist name "),
    title : Yup.string()
  });

const SearchForm = () => {

    const classes = useStyles()
    const  { value, dispatch } = useContext(AlbumContext)
    const router = useRouter()

    return (
        <Box mx={'auto'} className={classes.box} alignItems="center" style={{position:'relative'}}>
            <Typography variant="h5" className={classes.typography}> Search</Typography>
            <Formik
            style={{ margin:'auto'}}
            initialValues={{ artist: value.currentArtist, title:'' }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              // dispatch({type: RESET_STATE})
              setTimeout(() => {
                actions.setSubmitting(false);
                if (values.title === ''){
                    dispatch({type: CURRENT_ARTIST, payload: values.artist })
                // actions.resetForm();
                router.push(`/artistlist/${values.artist}`)     
                } else {
                    router.push(`/lyrics/${values.artist}/${values.title}`)
                }

                
              }, 500);
            }}
          >
            {(values) => (
              <Form >
                <Field
                style={{ marginTop:'4em', display:'block'}}
                  name="artist"
                  component={TextField}
                  type="text"
                  placeholder="Artist Name ... "
                  InputProps={{
                    startAdornment: (
                      <InputAdornment>
                        <SearchRounded />
                      </InputAdornment>
                    )
                  }}
                />
                <Field
                style={{marginTop:'3em',marginBottom:'3em' , display:'block'}}
                  name="title"
                  component={TextField}
                  type="text"
                  placeholder="Song title"
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment>
                        <SearchRounded />
                      </InputAdornment>
                    )
                  }}
                
                />
                <Button variant="contained" color="primary" type="submit" fullWidth >
                  search
                </Button>
               
              </Form>
              
            )}
            
          </Formik>
          <Box width={'100%'} style={{ position:'absolute', bottom:0 , marginBottom:'0.4em', marginLeft:'1em'}}>
          <Typography style={{ display:'inline-block' }} className={classes.typography} component="span" variant="caption"> *provide just artist name for informations... </Typography>
          <Typography style={{ display:'inline-block' , flexGrow:1 }}  className={classes.typography} component="span" variant="caption"> *provide artist name & track title  for lyrics ...  </Typography>
          </Box>
        </Box>
    )
}

export default SearchForm
