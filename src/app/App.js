import React, { Fragment } from "react";

import Grid from "material-ui/Grid";

import TopBarContainer from "topBar/TopBarContainer";
import SideBar from "sideBar/SideBar";
import AppBody from "appBody/AppBody";

const App = () => (
  <Fragment>
    <TopBarContainer />
    <Grid container>
      <SideBar />
      <AppBody />
    </Grid>
  </Fragment>
);

export default App;
