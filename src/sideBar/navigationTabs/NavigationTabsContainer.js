import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  showMyItems,
  showFilters,
  showTools
} from "sideBar/navigationTabs/actions";
import NavigationTabs from "sideBar/navigationTabs/NavigationTabs";

class NavigationTabsContainer extends Component {
  componentDidMount() {
    const {
      location: { pathname },
      dispatchShowFilters,
      dispatchShowMyTools
    } = this.props;

    if (pathname.includes("/pagebuilder/")) {
      return dispatchShowFilters([false, false, true]);
    }
    if (pathname.includes("/workbench/")) {
      return dispatchShowMyTools([false, false, false]);
    }
    // By default it sets the tab to myItems with the others disabled.
    // See reducer inital state.
  }

  handleChange = (event, value) => {
    const {
      dispatchShowMyItems,
      dispatchShowFilters,
      dispatchShowMyTools
    } = this.props;

    switch (value) {
      case 1:
        dispatchShowFilters();
        break;
      case 2:
        dispatchShowMyTools();
        break;
      default:
        dispatchShowMyItems();
        break;
    }
  };

  render() {
    const { visibleTab, disabledTabs } = this.props;

    return (
      <NavigationTabs
        visibleTab={visibleTab}
        disabledTabs={disabledTabs}
        handleChange={this.handleChange}
      />
    );
  }
}

NavigationTabsContainer.propTypes = {
  location: PropTypes.object.isRequired,
  visibleTab: PropTypes.number.isRequired,
  disabledTabs: PropTypes.array.isRequired,
  dispatchShowMyItems: PropTypes.func.isRequired,
  dispatchShowFilters: PropTypes.func.isRequired,
  dispatchShowMyTools: PropTypes.func.isRequired
};

const mapStateToProps = ({
  navigationTabsReducer: { visibleTab, disabledTabs }
}) => ({
  visibleTab,
  disabledTabs
});

const mapDispatchToProps = dispatch => ({
  dispatchShowMyItems: disabledTabs => {
    dispatch(showMyItems(disabledTabs));
  },
  dispatchShowFilters: disabledTabs => {
    dispatch(showFilters(disabledTabs));
  },
  dispatchShowMyTools: disabledTabs => {
    dispatch(showTools(disabledTabs));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  NavigationTabsContainer
);
