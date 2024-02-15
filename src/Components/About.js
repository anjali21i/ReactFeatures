import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { userRecArray, userRecArray2, userRecordArray2, users, usersArr } from "../utils/dummyData";
import { Button, Stack } from "react-bootstrap";

export const About = (props) => {

  return (
    <>
      <div className="wrapper_about">About Page</div>
      <div>
        {userRecArray.map((item, index, arr) => {
          return <div>{item.name}</div>;
        })}
      </div>
      {/* <div>
        hel2
        {usersArr.map((item, index, arr) => {
          return <>{item.firstName}</>;
        })}
      </div>
      <div>
        hel3
        {userRecordArray2.map((item, index, arr) => {
          return <>{item.name}</>;
        })}
      </div> */}
      {/* <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack> */}
    </>
  );
};

About.propTypes = {
  second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(About);
