import React from "react";

import Grid from "material-ui/Grid";

import TopBarContainer from "topBar/TopBarContainer";
import SideBar from "sideBar/SideBar";
import AppBody from "appBody/AppBody";

const App = () => (
  <div>
    <TopBarContainer />
    <Grid container>
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item>
        <AppBody />
      </Grid>
    </Grid>
  </div>
);

export default App;
