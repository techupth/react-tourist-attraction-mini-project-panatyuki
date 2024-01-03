import React from "react";
import PropTypes from "prop-types";

function Header({ text }) {
  return <div>{text}</div>;
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
