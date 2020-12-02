import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../styles/theme";
import MenuBar from "../components/MenuBar";
import AlbumState from "../context/AlbumState";
import Router from "next/router";
import Loader from "../components/Loader";
export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title> Discography finder </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Search artist discography " />
        <meta name="description" content="Search artist lyrics  " />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <AlbumState>
        <CssBaseline>
          <ThemeProvider theme={theme}>
            <MenuBar />
            {loading ? <Loader />  : <Component {...pageProps} />}
            
          </ThemeProvider>
        </CssBaseline>
      </AlbumState>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
