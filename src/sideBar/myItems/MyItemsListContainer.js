import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { myItemsRequest } from "sideBar/myItems/actions";

import { LoadingContainer } from "common/loading";
import MyItemsList from "sideBar/myItems/MyItemsList";

class MyItemsListContainer extends Component {
  static propTypes = {
    dispatchLoadMyItems: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    items: PropTypes.object,
    error: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatchLoadMyItems();
  }

  render() {
    return (
      <LoadingContainer isLoading={this.props.isLoading}>
        <MyItemsList {...this.props} />
      </LoadingContainer>
    );
  }
}

const mapStateToProps = ({ myItemsReducer: { isLoading, items, error } }) => ({
  isLoading,
  items,
  error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadMyItems: () => {
    dispatch(myItemsRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  MyItemsListContainer
);
