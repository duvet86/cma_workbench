import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MyItemsListContainer from "sideBar/myItems/MyItemsListContainer";
import OperatorsListContainer from "sideBar/operators/OperatorsListContainer";

const SideBarBodyContainer = ({ visibleTab, ...props }) => {
  let component = null;
  switch (visibleTab) {
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

  return (
    <div
      style={{
        overflow: "auto",
        marginBottom: 48,
        height: "100%"
      }}
    >
      {component}
    </div>
  );
};

SideBarBodyContainer.propTypes = {
  visibleTab: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({ navigationTabsReducer: { visibleTab } }) => ({
  visibleTab
});

export default connect(mapStateToProps)(SideBarBodyContainer);
