import React from "react";
import PropTypes from "prop-types";

import withLoading from "lib/withLoading";

const Profile = ({ userInfo: { Profile: { UserName } } }) => (
  <div>{UserName}</div>
);

Profile.propTypes = {
  userInfo: PropTypes.object.isRequired
};

export default withLoading(Profile);
