import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { profileRequest } from "profile/actions";

import Profile from "profile/Profile";

class ProfileContainer extends Component {
  componentWillMount() {
    this.props.dispatchLoadProfile();
  }

  render() {
    return <Profile {...this.props} />;
  }
}

ProfileContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  userInfo: PropTypes.object
};

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
