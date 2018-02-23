import React, { Fragment } from "react";

import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

import HelpPageCard from "helpPage/HelpPageCard";

import linksList from "helpPage/cardsData";

const HelpPage = () => (
  <Fragment>
    <Grid item xs={12}>
      <Typography variant="headline" gutterBottom>
        Welcome
      </Typography>
    </Grid>
    {linksList.map(({ id, ...rest }) => (
      <Grid item xs={4} key={id}>
        <HelpPageCard {...rest} />
      </Grid>
    ))}
  </Fragment>
);

export default HelpPage;
