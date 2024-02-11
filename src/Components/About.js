import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { userRecArray } from "../utils/dummyData";

export const About = (props) => {

  let userMap = userRecArray.map((item, index, arr) => {
    return console.log("item:", item, "index:", index, "arr:", arr);
  });

  console.log(userMap);

  return (
    <>
      <div>About</div>
      <div>
        hel
        {userRecArray.map((item, index, arr) => {
          return item.name;
        })}
      </div>
    </>
  );
};

About.propTypes = {
  second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
