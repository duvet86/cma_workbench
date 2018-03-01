import React from "react";
import PropTypes from "prop-types";

import List from "material-ui/List";

import withLoading from "lib/withLoading";

import Operator from "sideBar/operators/Operator";

const OperatorsList = ({ operators }) => (
  <List>
    {operators.map(operator => (
      <Operator key={operator.operatorServiceId} {...operator} />
    ))}
  </List>
);

OperatorsList.propTypes = {
  operators: PropTypes.array.isRequired
};

export default withLoading(OperatorsList);
