import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MyItemsListContainer from "sideBar/myItems/MyItemsListContainer";
import OperatorsListContainer from "sideBar/operators/OperatorsListContainer";

const SideBarBodyContainer = ({ visibleTab, ...props }) => {
  switch (visibleTab) {
    case 1:
      return <div>Filters</div>;
    case 2:
      return <OperatorsListContainer {...props} />;
    default:
      return <MyItemsListContainer {...props} />;
  }
};

SideBarBodyContainer.propTypes = {
  visibleTab: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({ navigationTabsReducer: { visibleTab } }) => ({
  visibleTab
});

export default connect(mapStateToProps)(SideBarBodyContainer);
