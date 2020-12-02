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

});

export default theme;
