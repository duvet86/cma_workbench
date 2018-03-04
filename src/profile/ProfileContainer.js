import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { profileRequest } from "profile/actions";

import LoaderContainer from "common/LoaderContainer";
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
      <LoaderContainer isLoading={this.props.isLoading}>
        <Profile {...this.props} />
      </LoaderContainer>
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
