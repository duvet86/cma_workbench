import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import Operator from "sideBar/operators/Operator";

const OperatorsList = ({ operators }) => (
  <List>
    {Object.keys(operators).map(key => (
      <Operator key={key} {...operators[key]} />
    ))}
  </List>
);

OperatorsList.propTypes = {
  operators: PropTypes.object
};

export default OperatorsList;
