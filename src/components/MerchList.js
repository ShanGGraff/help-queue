import React from 'react';
import Merch from './Merch';
import PropTypes from "prop-types";

function MerchList(props){  
  return (
    <React.Fragment>
      <hr/>
      {props.merchList.map((merch, index) =>
        <Merch names={merch.name}
          location={merch.description}
          issue={merch.quantity}
          key={index} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array
};

export default MerchList;