import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.description}</h3>
      <p><em>{props.quantity}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // quantity: PropTypes.int
};

export default Merch;