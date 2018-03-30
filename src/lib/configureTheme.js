// @flow

import { createMuiTheme } from "material-ui/styles";

import amber from "material-ui/colors/amber";
import blue from "material-ui/colors/blue";

const configureTheme = () =>
  createMuiTheme({
    palette: {
      primary: amber,
      secondary: { light: blue[600], main: blue[900], dark: blue[900] }
    },
    overrides: {
      MuiStepIcon: {
        root: {
          "&$completed": {
            color: "green"
          }
        }
      }
    }
  });

export default configureTheme;
