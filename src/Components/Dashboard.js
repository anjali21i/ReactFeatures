import React from "react";
import PropTypes from "prop-types";
import MainComponent from "./LazyLoading/MainComponent";
import ContextTest from "./ContextTest";

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <MainComponent />
      <ContextTest />
    </React.Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
