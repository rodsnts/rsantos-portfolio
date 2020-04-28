import React, { Fragment } from "react";

const db = require("../../db.json");

const Header = (props) => {
  return (
    <Fragment>
      <p
        style={{ textTransform: "uppercase" }}
      >{`${db.profile.firstName} ${db.profile.lastName}`}</p>

      <h1 style={{ textTransform: "uppercase" }}>{props.title}</h1>
      <p>{db.about.me}</p>
    </Fragment>
  );
};

export default Header;
