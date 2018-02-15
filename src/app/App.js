import React from "react";
import PropTypes from "prop-types";

import TopBarContainer from "topBar/TopBarContainer";
import SideBar from "sideBar/SideBar";

const App = ({ classes }) => (
  <div>
    <TopBarContainer />
    <SideBar />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
