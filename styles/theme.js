import { createMuiTheme } from "@material-ui/core/styles";
import { red, blue, green } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    appbar: {
      main: "#14213d"
    },
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },

    logo: {
      main: "#eee"
    }
  },
  overrides:{
    MuiCard:{
      root:{
        height:'300px'
      }
    },
    MuiCardHeader:{
      root:{
        background: blue[900],
        color:'white',
        height:'auto',
        padding:'1.7em',
        
      },
      title:{
        marginTop:'0.4em',
        fontSize:'1.4em',
        textOverflow:'hidden'
        
      }
    },
    MuiIconButton:{
      root:{
        fontSize:'4em'
      }
    },
    MuiContainer:{
      root:{
        width: '100vw !important',
      },
      maxWidthXl:{
        width:'100vw'
      }
    },
    MuiBottomNavigation:{
      root:{
        marginTop:'6em'
      }
    }
  }

});

export default theme;
