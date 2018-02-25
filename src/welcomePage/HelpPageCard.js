import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

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
