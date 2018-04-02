import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { profileRequest } from "profile/actions";

import { LoadingContainer } from "common/loading";
import Profile from "profile/Profile";

class ProfileContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    userInfo: PropTypes.object
  };

  componentDidMount() {
    this.props.dispatchLoadProfile();
  }

  render() {
    return (
      <LoadingContainer isLoading={this.props.isLoading}>
        <Profile {...this.props} />
      </LoadingContainer>
    );
  }
}

const mapStateToProps = ({
  profileReducer: { isLoading, userInfo, error }
}) => ({
  isLoading,
  userInfo,
  error
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadProfile: () => {
    dispatch(profileRequest());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
