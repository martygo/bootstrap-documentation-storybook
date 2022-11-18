import React from "react";
import { PropTypes } from "prop-types";

const Icon = ({ name }) => {
  return (
    <>
        <i className={`bi bi-${name} me-2`}/>
    </>
  );
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon;