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
  componentWillMount() {
    const {
      location: { pathname },
      dispatchShowFilters,
      dispatchShowMyTools,
      dispatchShowMyItems
    } = this.props;

    if (pathname.includes("/pagebuilder/")) {
      return dispatchShowFilters();
    }
    if (pathname.includes("/workbench/")) {
      return dispatchShowMyTools();
    }

    return dispatchShowMyItems();
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
    const { visibleTab } = this.props;

    return (
      <NavigationTabs
        visibleTab={visibleTab}
        handleChange={this.handleChange}
      />
    );
  }
}

NavigationTabsContainer.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = ({ navigationTabsReducer: { visibleTab } }) => ({
  visibleTab
});

const mapDispatchToProps = dispatch => ({
  dispatchShowMyItems: () => {
    dispatch(showMyItems());
  },
  dispatchShowFilters: () => {
    dispatch(showFilters());
  },
  dispatchShowMyTools: () => {
    dispatch(showTools());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  NavigationTabsContainer
);
