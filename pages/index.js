import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import AlbumContext from "../context/AlbumContext";
import { FETCH_ARTIST, CURRENT_ARTIST, FETCH_ALBUMS } from "../context/types";
import SearchForm from "../components/SearchForm";
import MenuBar from "../components/MenuBar";
export default function Home() {
  

 

  
  return (
    <>
   <Head>
        <title>Band Organizer </title>
        <meta name="description" content="Discography finder" /> 
        <meta name="description" content="Find song lyrics and discography of a band or artist"  /> 
      </Head>
        {/* <pre> {JSON.stringify(data, null, 4)}</pre> */}
          <SearchForm /> 
    </>
  );
}
