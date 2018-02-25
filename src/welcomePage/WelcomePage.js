import React, { Fragment } from "react";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import HelpPageCard from "welcomePage/HelpPageCard";

import linksList from "welcomePage/cardsData";

const WelcomePage = () => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="headline" gutterBottom>
        Welcome
      </Typography>
    </Grid>
    {linksList.map(({ id, ...rest }) => (
      <Grid item md={4} xs={12} key={id}>
        <HelpPageCard {...rest} />
      </Grid>
    ))}
  </Fragment>
);

export default WelcomePage;
