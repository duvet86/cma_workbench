import React, { Fragment } from "react";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import HelpPageCard from "helpPageCard/HelpPageCard";

const HelpPage = () => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="headline" gutterBottom>
        Help Page
      </Typography>
    </Grid>
    {[0, 1, 2, 3].map(id => (
      <Grid item xs={4} key={id}>
        <HelpPageCard />
      </Grid>
    ))}
  </Fragment>
);

export default HelpPage;
