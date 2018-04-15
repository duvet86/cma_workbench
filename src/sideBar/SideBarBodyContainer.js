import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MyItemsListContainer from "sideBar/myItems/MyItemsListContainer";
import OperatorsListContainer from "sideBar/operators/OperatorsListContainer";
import SideBarBody from "sideBar/SideBarBody";

const SideBarBodyContainer = ({ selectedTab, ...props }) => {
  let component = null;
  switch (selectedTab) {
    case 1:
      component = <div>Filters</div>;
      break;
    case 2:
      component = <OperatorsListContainer {...props} />;
      break;
    default:
      component = <MyItemsListContainer {...props} />;
      break;
  }
  const renderer = () => component;

  return <SideBarBody tabRenderer={renderer} />;
};

SideBarBodyContainer.propTypes = {
  selectedTab: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({ navigationTabsReducer: { selectedTab } }) => ({
  selectedTab
});

export default connect(mapStateToProps)(SideBarBodyContainer);
