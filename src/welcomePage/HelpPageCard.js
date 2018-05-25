import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const syles = {
  iconColor: {
    color: "initial"
  }
};

const WelcomePageCard = ({
  classes,
  IconComponent,
  label,
  description,
  to
}) => (
  <NavLink to={to}>
    <Card>
      <CardContent>
        <IconComponent className={classes.iconColor} />
        <Typography variant="headline" component="h2">
          {label}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  </NavLink>
);

WelcomePageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  IconComponent: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default withStyles(syles)(WelcomePageCard);
